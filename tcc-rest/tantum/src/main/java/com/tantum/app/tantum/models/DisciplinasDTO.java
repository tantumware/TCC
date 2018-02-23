package com.tantum.app.tantum.models;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class DisciplinasDTO extends Result<Semestre> {

	public DisciplinasDTO(boolean success, Semestre result) {
		super(success, result);
	}

	private String semestre;

}
