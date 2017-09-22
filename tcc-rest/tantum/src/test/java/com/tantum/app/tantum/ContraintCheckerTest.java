package com.tantum.app.tantum;

import static com.tantum.app.tantum.models.ConstraintChecker.checkCargaHorariaMaxima;
import static com.tantum.app.tantum.models.ConstraintChecker.checkCargaHorariaMinima;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.junit.Before;
import org.junit.Test;

import com.tantum.app.tantum.models.ConstraintException;
import com.tantum.app.tantum.models.Disciplina;
import com.tantum.app.tantum.models.Semestre;
import com.tantum.app.tantum.models.Settings;

public class ContraintCheckerTest {

	private Settings settings;

	private Semestre semestre;

	@Before
	public void before() {
		this.settings = new Settings(22, 11, true, false, false, Arrays.asList(), Arrays.asList());

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
		checkCargaHorariaMaxima(this.settings, this.semestre);
	}

	@Test(expected = ConstraintException.class)
	public void testCargaHorariaMinima() throws ConstraintException {
		checkCargaHorariaMinima(this.settings, this.semestre);
	}

}
