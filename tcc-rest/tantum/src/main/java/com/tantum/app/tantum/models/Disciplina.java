package com.tantum.app.tantum.models;

import java.util.List;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class Disciplina {

	private String nome;

	private String codigo;

	private int fase;

	private int aulas;

	private boolean obrigatoria;

	private List<String> horarios;

	private List<String> requisitos;

}
