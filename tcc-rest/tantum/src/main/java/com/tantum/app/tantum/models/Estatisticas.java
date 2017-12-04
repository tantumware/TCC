package com.tantum.app.tantum.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Estatisticas {

	int semestresCursados;

	int semestresRestantes;

	int disciplinasCursadas;

	int totalDisciplinasCurso;

	double porcentagemCursado;

	String semestreFormatura;

}
