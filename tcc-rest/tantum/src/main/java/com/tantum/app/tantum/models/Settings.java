package com.tantum.app.tantum.models;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Settings {

	private int cargaHorariaMaxima;

	private List<Periodo> periodos;

	private List<Subject> selecionadas;

	private List<Subject> excluidas;

}
