package com.tantum.app.tantum.algoritmo;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ConstraintException extends Exception {

	private static final long serialVersionUID = 1L;

	private ConstraintEnum constraint;

}
