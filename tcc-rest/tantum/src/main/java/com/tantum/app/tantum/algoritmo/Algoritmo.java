package com.tantum.app.tantum.algoritmo;

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

import com.tantum.app.tantum.models.Curso;
import com.tantum.app.tantum.models.Periodo;
import com.tantum.app.tantum.models.Semester;
import com.tantum.app.tantum.models.Settings;
import com.tantum.app.tantum.models.Subject;

import lombok.Getter;

@Getter
public class Algoritmo {

	private Map<String, Subject> disciplinas;

	private Map<String, Integer> rank;

	private Map<Integer, Map<String, List<String>>> curriculo;

	private Map<Integer, Semester> semestres = new HashMap<>();

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
		// @formatter:off
		return this.rank.entrySet()
				.stream()
				.sorted((e1, e2) -> Integer.compare(e2.getValue(), e1.getValue()))
				.map(Entry::getKey)
				.collect(Collectors.toList());
		// @formatter:on
	}

	public void applyConstraints(Settings settings) {
		List<String> rankDisciplinas = getDisciplinasByRank();

		int i = 1;
		this.semestres.put(i, new Semester());
		for (String d : rankDisciplinas) {
			Subject disciplina = this.disciplinas.get(d);

			Model model = new Model();
			Solver solver = model.getSolver();

			int cargaHoraria = this.semestres.get(i).getDisciplinas().stream().mapToInt(Subject::getAulas).sum();
			model.addClauseTrue(model.boolVar("carga horaria maxima", cargaHoraria <= settings.getCargaHorariaMaxima()));
			model.addClauseTrue(model.boolVar("horarios", validateHorario(this.semestres.get(i).getDisciplinas(), disciplina)));
			model.addClauseTrue(model.boolVar("periodo", validadePeriodo(settings, disciplina)));
			model.addClauseFalse(model.boolVar("disciplias excluidas", validateDisciplinaExcluida(settings, disciplina)));
			// TODO ver pre requisitos

			boolean solve = solver.solve();
			if (solve) {
				this.semestres.get(i).getDisciplinas().add(disciplina);
			} else if (!checkCargaHorariaOk(solver)) { // disciplina que nao deu solve, como choque de horário mas que ainda cabe
														// materia nao ta sendo adicionada
				i++;
				Semester s = new Semester();
				s.getDisciplinas().add(disciplina);
				this.semestres.put(i, s);
			}
		}
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
	private boolean validateDisciplinaExcluida(Settings settings, Subject disciplina) {
		return settings.getExcluidas().contains(disciplina);
	}

	/**
	 * Valida o períoo escolhido pelo aluno (matutino, vespertivo e noturno)
	 *
	 * @param settings
	 * @param disciplina
	 * @return boolean
	 */
	private boolean validadePeriodo(Settings settings, Subject disciplina) {
		return disciplina.getHorarios()
				.stream()
				.map(Periodo::getPeriodoByHorario)
				.allMatch(settings.getPeriodos()::contains);
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
