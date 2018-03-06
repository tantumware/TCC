package com.tantum.app.tantum.algoritmo;

import org.chocosolver.solver.Model;

import com.tantum.app.tantum.models.Subject;
import com.tantum.app.tantum.models.Semester;
import com.tantum.app.tantum.models.Settings;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class ConstraintChecker {

	public static void checkCargaHorariaMaxima(Settings settings, Semester semestre, Model model)
			throws ConstraintException {
		int count = semestre.getDisciplinas().stream().mapToInt(Subject::getAulas).sum();
		// Constraint c = model.max(max, var1, var2)

		if (count > settings.getCargaHorariaMaxima()) {
			throw new ConstraintException(ConstraintEnum.CARGA_HORARIA_MAXIMA);
		}
	}

	public static void applyAll(Settings settings, Semester semestre) throws ConstraintException {
		// for (Constraint c : Constraint.values()) {
		// c.getRule().apply(settings, semestre);
		// }
	}

}
