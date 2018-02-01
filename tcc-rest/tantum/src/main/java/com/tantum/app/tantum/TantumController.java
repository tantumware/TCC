package com.tantum.app.tantum;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.tantum.app.tantum.algoritmo.Algoritmo;
import com.tantum.app.tantum.helper.Helper;
import com.tantum.app.tantum.models.Curso;
import com.tantum.app.tantum.models.Disciplina;
import com.tantum.app.tantum.models.Estatisticas;
import com.tantum.app.tantum.models.Semestre;
import com.tantum.app.tantum.models.Settings;

@RequestMapping("/v1/")
@CrossOrigin(origins = "http://localhost:8100")
@RestController
public class TantumController {

	@RequestMapping(path = "/test", method = RequestMethod.GET)
	public String test(@RequestParam(value = "token", defaultValue = "0") String token) {
		return "This is a test!";
	}

	@RequestMapping(path = "/semestre", method = RequestMethod.POST, consumes = "application/json")
	public Semestre semestre(@RequestBody(required = true) Settings settings, @RequestParam(value = "token", defaultValue = "0") String token) {
		String c = Helper.readJson("test.json");

		Gson g = new Gson();
		Curso curso = g.fromJson(c, Curso.class);

		Algoritmo a = new Algoritmo(curso);
		a.rankDisciplinas();
		a.applyConstraints(settings);

		Map<Integer, List<Disciplina>> result = a.getSemestres();

		return new Semestre(result.get(1));
	}

	@RequestMapping(path = "/estatisticas", method = RequestMethod.GET)
	public Estatisticas estatisticas(@RequestParam(value = "token") String token) {
		Estatisticas e = new Estatisticas(1, 2, 3, 4, 5, "2019-1");
		return e;
	}

	@RequestMapping(path = "/semestre-atual", method = RequestMethod.GET)
	public Semestre semestreAtual(@RequestParam(value = "token") String token) {
		return new Semestre();
	}

}
