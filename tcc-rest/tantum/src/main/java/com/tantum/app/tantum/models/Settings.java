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

	private int cargaHorariaMinima;

	private boolean noturno;

	private boolean diurno;

	private boolean matutino;

	private List<Disciplina> selecionadas;

	private List<Disciplina> excluidas;

}
