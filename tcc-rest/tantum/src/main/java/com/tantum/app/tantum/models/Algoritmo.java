package com.tantum.app.tantum.models;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Algoritmo {

	private List<Disciplina> disciplinas;

	public Map<String, Integer> rank;

	private Map<Integer, Map<String, List<String>>> curriculo;

	public Algoritmo(Curso curso) {
		this.disciplinas = curso.getDisciplinas();
		// recebe a lista de disciplinas do curso e monta do map
		this.curriculo = new HashMap<>();

		this.disciplinas.stream().forEach(d -> {
			if (!this.curriculo.containsKey(d.getFase())) {
				this.curriculo.put(d.getFase(), new HashMap<>());
			}
			this.curriculo.get(d.getFase()).put(d.getNome(), d.getRequisitos());// TODO mudar para codigo
		});
	}

	public void RankDisciplinas() {
		this.rank = new HashMap<>();

		int qtFases = this.curriculo.size();
		// para cada materia da fase, começando pela ultima
		for (int i = qtFases; i >= 1; i--) {

			this.curriculo.get(i).entrySet().stream().forEach(entry -> {
				// controle da disciplina
				if (this.rank.containsKey(entry.getKey())) {
					// se ja existe a disciplina, soma 1
					Integer aux = this.rank.get(entry.getKey());
					aux++;
					this.rank.replace(entry.getKey(), aux);
				} else {
					// senao adiciona com valor 1
					this.rank.put(entry.getKey(), 1);
				}

				// controle dos requisitos
				entry.getValue().stream().forEach(requisito -> {
					if (this.rank.containsKey(requisito)) {
						// se ja existe o requisito, soma 1
						Integer aux = this.rank.get(requisito);
						aux++;
						this.rank.replace(requisito, aux);
					} else {
						// senao passa o valor da materia
						this.rank.put(requisito, this.rank.get(requisito));
					}
				});
			});

		}
	}
}
