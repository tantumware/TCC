package com.tantum.app.tantum.algoritmo;

import org.chocosolver.solver.Model;

import com.tantum.app.tantum.models.Semester;
import com.tantum.app.tantum.models.Settings;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum ConstraintEnum {

	// @formatter:off
	CARGA_HORARIA_MAXIMA(ConstraintChecker::checkCargaHorariaMaxima);
	// formatter:on

	private Rule rule;

	@FunctionalInterface
	public interface Rule {

		void apply(Settings setting, Semester semestre, Model model) throws ConstraintException;

	}

}
