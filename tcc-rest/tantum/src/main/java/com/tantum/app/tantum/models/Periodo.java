package com.tantum.app.tantum.models;

public enum Periodo {

	MATUTINO, VESPERTINO, NOTURNO;

	// 3.0820-2 : d.hhmm-n
	public static Periodo getPeriodoByHorario(String horario) {
		int hora = Integer.valueOf(horario.substring(2, 4));

		if (hora <= 12) {
			return MATUTINO;
		}

		if (hora >= 18) {
			return NOTURNO;
		}

		return VESPERTINO;
	}

}
