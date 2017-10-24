package com.tantum.app.tantum.algoritmo;

import org.chocosolver.solver.Model;

import lombok.AllArgsConstructor;
import lombok.Getter;

import com.tantum.app.tantum.models.Semestre;
import com.tantum.app.tantum.models.Settings;

@AllArgsConstructor
@Getter
public enum ConstraintEnum {

	// @formatter:off
	CARGA_HORARIA_MAXIMA(ConstraintChecker::checkCargaHorariaMaxima),
	CARGA_HORARIA_MINIMA(ConstraintChecker::checkCargaHorariaMinima);
	// formatter:on

	private Rule rule;

	@FunctionalInterface
	public interface Rule {

		void apply(Settings setting, Semestre semestre, Model model) throws ConstraintException;

	}

}
