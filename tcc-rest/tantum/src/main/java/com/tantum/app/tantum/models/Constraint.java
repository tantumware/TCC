package com.tantum.app.tantum.models;

import static com.tantum.app.tantum.models.ConstraintChecker.checkCargaHorariaMaxima;
import static com.tantum.app.tantum.models.ConstraintChecker.checkCargaHorariaMinima;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum Constraint {

	//@formatter:off
	CARGA_HORARIA_MAXIMA((set, sem) -> checkCargaHorariaMaxima(set, sem)),
	CARGA_HORARIA_MINIMA((set, sem) -> checkCargaHorariaMinima(set, sem))
	;
	//formatter:on

	private Rule rule;

	@FunctionalInterface
	public interface Rule {

		void apply(Settings setting, Semestre semestre) throws ConstraintException;

	}

}
