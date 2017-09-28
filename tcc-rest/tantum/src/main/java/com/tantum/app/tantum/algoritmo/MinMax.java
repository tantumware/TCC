package com.tantum.app.tantum.algoritmo;

import java.util.AbstractMap.SimpleEntry;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.tantum.app.tantum.models.Disciplina;

public class MinMax {

	private Map<Integer, Map<String, String>> semestres;

	private List<Disciplina> disciplinas;

	public MinMax(List<Disciplina> disciplinas) {
		this.disciplinas = disciplinas;
		this.initSemestre();
	}

	private void initSemestre() {
		this.semestres = new HashMap<>();
	}

	public SimpleEntry<String, Integer> doMinMax(Map<Integer, Map<String, String>> semestres, String disciplina) {

		if (this.disciplinas.isEmpty()) {
			return new SimpleEntry<>(null, this.calculateScore(semestres));
		}

		return null;
	}

	private int calculateScore(Map<Integer, Map<String, String>> semestres) {
		return semestres.size();
	}

}
