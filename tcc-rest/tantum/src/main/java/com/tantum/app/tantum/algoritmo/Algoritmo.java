package com.tantum.app.tantum.algoritmo;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.chocosolver.solver.Model;
import org.chocosolver.solver.Solver;
import org.chocosolver.solver.variables.impl.FixedBoolVarImpl;

import com.tantum.app.tantum.models.Constraints;
import com.tantum.app.tantum.models.Curso;
import com.tantum.app.tantum.models.NextSemestersDTO;
import com.tantum.app.tantum.models.Periodo;
import com.tantum.app.tantum.models.Semester;
import com.tantum.app.tantum.models.Subject;

import lombok.Getter;

@Getter
public class Algoritmo {

	private Map<String, Subject> disciplinas;

	private Map<String, Integer> rank;

	private Map<Integer, Map<String, List<String>>> curriculo;

	private Map<Integer, Semester> semestres = new HashMap<>();

	private List<Subject> subjectsWantedError;

	public Algoritmo(Curso curso) {
		this.disciplinas = curso.getDisciplinas().stream()
				.collect(Collectors.toMap(Subject::getCodigo, Function.identity()));
		// recebe a lista de disciplinas do curso e monta do map
		this.curriculo = new HashMap<>();

		curso.getDisciplinas().stream().forEach(d -> {
			if (!this.curriculo.containsKey(d.getFase())) {
				this.curriculo.put(d.getFase(), new HashMap<>());
			}
			this.curriculo.get(d.getFase()).put(d.getCodigo(), d.getRequisitos());
		});
	}

	public void rankDisciplinas() {
		this.rank = new HashMap<>();

		int qtFases = this.curriculo.size();
		// para cada materia da fase, começando pela ultima fase
		for (int i = qtFases; i >= 1; i--) {
			for (String materia : this.curriculo.get(i).keySet()) {
				// controle da disciplina
				if (this.rank.containsKey(materia)) {
					// se ja existe a disciplina, soma 1
					Integer aux = this.rank.get(materia);
					aux++;
					this.rank.replace(materia, aux);
				} else {
					// senao adiciona com valor 1
					this.rank.put(materia, 1);
				}

				// controle dos requisitos
				// para cada requisito da materia
				for (String requisito : this.curriculo.get(i).get(materia)) {
					if (this.rank.containsKey(requisito)) {
						// se ja existe o requisito, soma 1
						Integer aux = this.rank.get(requisito);
						aux++;
						this.rank.replace(requisito, aux);
					} else {
						// senao passa o valor da materia
						this.rank.put(requisito, this.rank.get(materia));
					}
				}
			}
		}
	}

	private List<String> getDisciplinasByRank() {
		return this.rank.entrySet()
				.stream()
				.sorted((e1, e2) -> Integer.compare(e2.getValue(), e1.getValue()))
				.map(Entry::getKey)
				.collect(Collectors.toList());
	}

	private Solver applyConstraints(Constraints constraints, List<String> subjectsHistory, Subject disciplina, List<Subject> currentSubjects) {
		Model model = new Model();
		Solver solver = model.getSolver();

		int cargaHoraria = currentSubjects.stream().mapToInt(Subject::getAulas).sum();
		model.addClauseTrue(model.boolVar("carga horaria maxima", cargaHoraria <= constraints.getCreditMax()));
		model.addClauseTrue(model.boolVar("horarios", validateHorario(currentSubjects, disciplina)));
		model.addClauseTrue(model.boolVar("periodo", validadePeriodo(constraints, disciplina)));
		model.addClauseFalse(model.boolVar("disciplias excluidas", validateDisciplinaExcluida(constraints, disciplina)));
		model.addClauseTrue(model.boolVar("requisitos", validateRequisitos(disciplina, subjectsHistory)));

		return solver;
	}

	public NextSemestersDTO calculateSemesters(Constraints constraints, List<String> _subjectsHistory) {
		List<String> rankDisciplinas = getDisciplinasByRank();
		rankDisciplinas.removeAll(_subjectsHistory);
		List<Subject> subjects = new ArrayList<>();
		List<String> subjectsHistory = _subjectsHistory;

		int i = 0;
		while (!rankDisciplinas.isEmpty() && i < 10) {
			i++;
			if (this.semestres.isEmpty()) {
				subjects = calculateFirstSemester(constraints, subjectsHistory, rankDisciplinas);
			} else {
				subjects = calculateSemester(constraints, subjectsHistory, new ArrayList<>(), rankDisciplinas);
			}
			this.semestres.put(i, new Semester(subjects));

			subjects.stream().map(Subject::getCodigo).forEach(codigo -> {
				rankDisciplinas.remove(codigo);
				subjectsHistory.add(codigo);
			});
		}
		System.out.println(rankDisciplinas);
		return new NextSemestersDTO(this.semestres, this.subjectsWantedError, new ArrayList<>());
	}

	private List<Subject> calculateFirstSemester(Constraints constraints, List<String> subjectsHistory, List<String> subjectsRemaining) {
		this.subjectsWantedError = new ArrayList<>();
		List<Subject> currentSubjects = new ArrayList<>();

		for (Subject subject : constraints.getSubjectsWanted()) { // TODO ordenar por rank
			Solver solver = applyConstraints(constraints, subjectsHistory, subject, currentSubjects);
			boolean solve = solver.solve();
			if (solve) {
				currentSubjects.add(subject);
			} else {
				this.subjectsWantedError.add(subject);
			}

		}

		return calculateSemester(constraints, subjectsHistory, currentSubjects, subjectsRemaining);
	}

	private List<Subject> calculateSemester(Constraints constraints, List<String> subjectsHistory, List<Subject> _currentSubjects, List<String> subjectsRemaining) {
		List<Subject> currentSubjects = _currentSubjects;

		for (String d : subjectsRemaining) {
			Subject disciplina = this.disciplinas.get(d);
			if (subjectsHistory.contains(d) || isSubjectNotWanted(constraints, d) || !currentSubjects.contains(disciplina)) {
				continue;
			}

			Solver solver = applyConstraints(constraints, subjectsHistory, disciplina, currentSubjects);

			boolean solve = solver.solve();
			if (solve) {
				currentSubjects.add(disciplina);
			} else if (!checkCargaHorariaOk(solver)) {
				break;
			}
		}

		return currentSubjects;
	}

	private boolean isSubjectNotWanted(Constraints constraints, String subject) {
		return constraints.getSubjectsNotWanted()
				.stream()
				.map(Subject::getCodigo)
				.anyMatch(subject::equals);
	}

	private boolean containsSubjectsWanted(Constraints constraints, String d) {
		return constraints.getSubjectsWanted()
				.stream()
				.map(Subject::getCodigo)
				.anyMatch(d::equals);
	}

	private boolean validateRequisitos(Subject disciplina, List<String> subjects) {
		return subjects.containsAll(disciplina.getRequisitos());
	}

	private boolean checkRequisito(Solver solver) {
		return Stream.of(solver.getModel().getVars())
				.filter(v -> v.getName().equals("requisitos"))
				.map(v -> ((FixedBoolVarImpl) v).getValue() == 1 ? true : false)
				.findAny()
				.orElse(false);
	}

	/**
	 * Verifica se a constraint da carga horária está ok
	 *
	 * @param solver
	 * @return boolean
	 */
	private boolean checkCargaHorariaOk(Solver solver) {
		return Stream.of(solver.getModel().getVars())
				.filter(v -> v.getName().equals("carga horaria maxima"))
				.map(v -> ((FixedBoolVarImpl) v).getValue() == 1 ? true : false)
				.findAny()
				.orElse(false);
	}

	/**
	 * Valida as disciplinas que não devem ser pegas
	 *
	 * @param settings
	 * @param disciplina
	 * @return boolean
	 */
	private boolean validateDisciplinaExcluida(Constraints settings, Subject disciplina) {
		return settings.getSubjectsNotWanted().contains(disciplina);
	}

	/**
	 * Valida o períoo escolhido pelo aluno (matutino, vespertivo e noturno)
	 *
	 * @param settings
	 * @param disciplina
	 * @return boolean
	 */
	private boolean validadePeriodo(Constraints settings, Subject disciplina) {
		return disciplina.getHorarios()
				.stream()
				.map(Periodo::getPeriodoByHorario)
				.allMatch(settings.getPeriods()::contains);
	}

	/**
	 * Valida o horário das disciplinas para nao haver choque de horários
	 *
	 * @param semestre
	 * @param currentDisciplina
	 * @return boolean
	 */
	private boolean validateHorario(List<Subject> semestre, Subject currentDisciplina) {
		return semestre.stream().noneMatch(d -> d.getHorarios().retainAll(currentDisciplina.getHorarios()));
	}
}
