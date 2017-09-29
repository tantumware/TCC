package com.tantum.app.tantum.algoritmo;

import com.tantum.app.tantum.models.Disciplina;
import com.tantum.app.tantum.models.Semestre;
import com.tantum.app.tantum.models.Settings;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class ConstraintChecker {

	public static void checkCargaHorariaMaxima(Settings settings, Semestre semestre) throws ConstraintException {
		int count = semestre.getDisciplinas().stream().mapToInt(Disciplina::getAulas).sum();
		if (count > settings.getCargaHorariaMaxima()) {
			throw new ConstraintException(Constraint.CARGA_HORARIA_MAXIMA);
		}
	}

	public static void checkCargaHorariaMinima(Settings settings, Semestre semestre) throws ConstraintException {
		int count = semestre.getDisciplinas().stream().mapToInt(Disciplina::getAulas).sum();
		if (count < settings.getCargaHorariaMinima()) {
			throw new ConstraintException(Constraint.CARGA_HORARIA_MINIMA);
		}
	}

	public static void applyAll(Settings settings, Semestre semestre) throws ConstraintException {
		for (Constraint c : Constraint.values()) {
			c.getRule().apply(settings, semestre);
		}
	}

}
