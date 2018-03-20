package com.tantum.app.tantum.models;

import java.util.Map;

public class SemestersDTO extends Result<Map<Integer, Semester>> {

	public SemestersDTO(boolean success, Map<Integer, Semester> result) {
		super(success, result);
	}

}
