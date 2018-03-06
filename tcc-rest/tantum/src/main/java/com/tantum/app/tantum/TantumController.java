package com.tantum.app.tantum;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.tantum.app.tantum.algoritmo.Algoritmo;
import com.tantum.app.tantum.helper.Helper;
import com.tantum.app.tantum.models.Curso;
import com.tantum.app.tantum.models.Subject;
import com.tantum.app.tantum.models.SubjectsDTO;
import com.tantum.app.tantum.models.Estatisticas;
import com.tantum.app.tantum.models.Login;
import com.tantum.app.tantum.models.LoginDTO;
import com.tantum.app.tantum.models.Semester;
import com.tantum.app.tantum.models.Settings;

@RequestMapping("/v1/")
@CrossOrigin
@RestController
public class TantumController {

	@RequestMapping(path = "/test", method = RequestMethod.GET)
	public String test(@RequestParam(value = "token", defaultValue = "0") String token) {
		return "This is a test!";
	}

	@RequestMapping(path = "/login", method = RequestMethod.GET)
	public LoginDTO login(@RequestParam(value = "username") String username, @RequestParam(value = "password") String password) {

		Login login = new Login(true, true);

		LoginDTO loginDto = new LoginDTO(true, login);

		return loginDto;
	}

	@RequestMapping(path = "/semestre", method = RequestMethod.POST, consumes = "application/json")
	public Semester semestre(@RequestBody(required = true) Settings settings, @RequestParam(value = "token", defaultValue = "0") String token) {
		String c = Helper.readJson("test.json");

		Gson g = new Gson();
		Curso curso = g.fromJson(c, Curso.class);

		Algoritmo a = new Algoritmo(curso);
		a.rankDisciplinas();
		a.applyConstraints(settings);

		Map<Integer, List<Subject>> result = a.getSemestres();

		return new Semester(result.get(1));
	}

	@RequestMapping(path = "/disciplinas/{semestre}", method = RequestMethod.GET)
	public SubjectsDTO disciplinas(@RequestParam(value = "username") String username, @RequestParam(value = "password") String password, @PathVariable String semestre) {
		String c = Helper.readJson("test.json");

		Gson g = new Gson();
		Semester s = g.fromJson(c, Semester.class);

		SubjectsDTO disciplinasDTO = new SubjectsDTO(true, s);
		disciplinasDTO.setSemestre(semestre);
		return disciplinasDTO;
	}

	@RequestMapping(path = "/estatisticas", method = RequestMethod.GET)
	public Estatisticas estatisticas(@RequestParam(value = "token") String token) {
		Estatisticas e = new Estatisticas(1, 2, 3, 4, 5, "2019-1");
		return e;
	}

	@RequestMapping(path = "/semestre-atual", method = RequestMethod.GET)
	public Semester semestreAtual(@RequestParam(value = "token") String token) {
		return new Semester();
	}

}
