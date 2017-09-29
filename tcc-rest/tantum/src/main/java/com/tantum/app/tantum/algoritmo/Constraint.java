package com.tantum.app.tantum.algoritmo;

import static com.tantum.app.tantum.algoritmo.ConstraintChecker.checkCargaHorariaMaxima;
import static com.tantum.app.tantum.algoritmo.ConstraintChecker.checkCargaHorariaMinima;

import lombok.AllArgsConstructor;
import lombok.Getter;

import com.tantum.app.tantum.models.Semestre;
import com.tantum.app.tantum.models.Settings;

@AllArgsConstructor
@Getter
public enum Constraint {

	// @formatter:off
	CARGA_HORARIA_MAXIMA((set, sem) -> checkCargaHorariaMaxima(set, sem)),
	CARGA_HORARIA_MINIMA((set, sem) -> checkCargaHorariaMinima(set, sem));
	// formatter:on

	private Rule rule;

	@FunctionalInterface
	public interface Rule {

		void apply(Settings setting, Semestre semestre) throws ConstraintException;

	}

}
