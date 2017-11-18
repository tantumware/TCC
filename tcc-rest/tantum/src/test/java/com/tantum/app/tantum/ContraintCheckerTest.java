package com.tantum.app.tantum;

import static com.tantum.app.tantum.algoritmo.ConstraintChecker.checkCargaHorariaMaxima;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.junit.Before;
import org.junit.Test;

import com.tantum.app.tantum.algoritmo.ConstraintException;
import com.tantum.app.tantum.models.Disciplina;
import com.tantum.app.tantum.models.Periodo;
import com.tantum.app.tantum.models.Semestre;
import com.tantum.app.tantum.models.Settings;

public class ContraintCheckerTest {

	private Settings settings;

	private Semestre semestre;

	@Before
	public void before() {
		this.settings = new Settings(22, Arrays.asList(Periodo.NOTURNO), Arrays.asList(), Arrays.asList());

		List<Disciplina> list = new ArrayList<>();
		Disciplina d = new Disciplina();
		d.setAulas(4);
		d.setFase(1);
		d.setHorarios(Arrays.asList("21830", "41830"));
		d.setNome("Disciplina Teste");
		d.setObrigatoria(true);
		d.setRequisitos(Arrays.asList());
		list.add(d);

		this.semestre = new Semestre();
		this.semestre.setDisciplinas(list);
	}

	@Test
	public void testCargaHorariaMaxima() throws ConstraintException {
		checkCargaHorariaMaxima(this.settings, this.semestre, null);
	}

}
