package com.tantum.app.tantum.models;

import java.util.List;
import java.util.Map;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class NextSemestersDTO {

	private Map<Integer, Semester> nextSemesters;

	private List<Subject> subjectWantedError;

	private List<Subject> subjectNotWantedError;

}
