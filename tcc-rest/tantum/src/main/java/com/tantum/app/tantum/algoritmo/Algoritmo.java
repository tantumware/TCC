package com.tantum.app.tantum.algoritmo;

import static com.tantum.app.tantum.algoritmo.ConstraintChecker.applyAll;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.function.Function;
import java.util.stream.Collectors;

import org.chocosolver.solver.Model;
import org.chocosolver.solver.Solver;

import com.tantum.app.tantum.models.Curso;
import com.tantum.app.tantum.models.Disciplina;
import com.tantum.app.tantum.models.Semestre;
import com.tantum.app.tantum.models.Settings;

import lombok.Getter;

@Getter
public class Algoritmo {

	private Map<String, Disciplina> disciplinas;

	private Map<String, Integer> rank;

	private Map<Integer, Map<String, List<String>>> curriculo;

	private Map<Integer, Semestre> semestres;

	public Algoritmo(Curso curso) {
		this.disciplinas = curso.getDisciplinas().stream()
				.collect(Collectors.toMap(Disciplina::getNome, Function.identity()));
		// recebe a lista de disciplinas do curso e monta do map
		this.curriculo = new HashMap<>();

		curso.getDisciplinas().stream().forEach(d -> {
			if (!this.curriculo.containsKey(d.getFase())) {
				this.curriculo.put(d.getFase(), new HashMap<>());
			}
			this.curriculo.get(d.getFase()).put(d.getNome(), d.getRequisitos());// TODO mudar para codigo
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

	public void checkConstraints(Settings settings) {
		this.semestres = new HashMap<>();
		this.semestres.put(1, new Semestre(new ArrayList<>()));

		for (String d : getDisciplinasByRank()) {
			int qtSemestres = this.semestres.size();
			Disciplina disciplina = this.disciplinas.get(d);
			Semestre s = this.semestres.get(qtSemestres);
			s.getDisciplinas().add(disciplina);

			try {
				applyAll(settings, s);
			} catch (ConstraintException e) {
				if (ConstraintEnum.CARGA_HORARIA_MAXIMA.equals(e.getConstraint())) {
					s.getDisciplinas().remove(disciplina);
					List<Disciplina> l = new ArrayList<>();
					l.add(disciplina);
					qtSemestres++;
					this.semestres.put(qtSemestres, new Semestre(l));
				}
			}
		}
	}

	private List<String> getDisciplinasByRank() {
		// @formatter:off
		return this.rank.entrySet().stream().sorted((e1, e2) -> Integer.compare(e2.getValue(), e1.getValue()))
				.map(Entry::getKey).collect(Collectors.toList());
		// @formatter:on
	}

	public void applyConstraints(Settings settings) {
		List<String> rankDisciplinas = getDisciplinasByRank();

		List<Disciplina> semestre = new ArrayList<>();

		for (String d : rankDisciplinas) {
			Disciplina disciplina = this.disciplinas.get(d);
			semestre.add(disciplina);

			Model model = new Model();
			Solver solver = model.getSolver();

			int cargaHoraria = semestre.stream().mapToInt(Disciplina::getAulas).sum();
			model.addClauseTrue(
					model.boolVar("carga horaria maxima", cargaHoraria <= settings.getCargaHorariaMaxima()));
			model.addClauseTrue(model.boolVar("periodo", true));

			boolean solve = solver.solve();
			System.out.println(solve + ": " + cargaHoraria);

			if (solve) {
				System.out.println(semestre);
			}
		}
	}
}
