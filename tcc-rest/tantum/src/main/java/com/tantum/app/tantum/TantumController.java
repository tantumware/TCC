package com.tantum.app.tantum;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.tantum.app.tantum.helper.Helper;
import com.tantum.app.tantum.models.Constraints;
import com.tantum.app.tantum.models.Estatisticas;
import com.tantum.app.tantum.models.Login;
import com.tantum.app.tantum.models.LoginDTO;
import com.tantum.app.tantum.models.Semester;
import com.tantum.app.tantum.models.SemestersDTO;
import com.tantum.app.tantum.models.SubjectsDTO;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequestMapping("/v1/")
@CrossOrigin
@RestController
public class TantumController {

	@RequestMapping(path = "/login", method = RequestMethod.GET)
	public LoginDTO login(@RequestParam(value = "username") String username, @RequestParam(value = "password") String password) {
		boolean userOk = StringUtils.isNotBlank(username);
		boolean passwordOk = StringUtils.isNotBlank(password);

		Login login = new Login(userOk, passwordOk);

		LoginDTO loginDto = new LoginDTO(userOk && passwordOk, login);

		log.info("Feito login com: " + username + "/" + password);

		return loginDto;
	}

	@RequestMapping(path = "/calculate-semester", method = RequestMethod.POST, consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
	public SemestersDTO calculateSemester(@RequestParam Map<String, String> body) {
		// System.out.println(body);
		// String c = Helper.readJson("test.json");
		//
		Gson g = new Gson();
		body.keySet().stream().forEach(s -> {
			Constraints curso = g.fromJson(s, Constraints.class);
			System.out.println(s);

		});
		//
		// Algoritmo a = new Algoritmo(curso);
		// a.rankDisciplinas();
		// // a.applyConstraints(constraints);
		//
		// log.info("calculate-semester");
		// return new SemestersDTO(true, a.getSemestres());
		return new SemestersDTO(true, new HashMap<>());
	}

	@RequestMapping(path = "/schedule/{semester}", method = RequestMethod.GET)
	public SubjectsDTO schedule(@RequestParam(value = "username") String username, @RequestParam(value = "password") String password, @PathVariable String semester) {
		String c = Helper.readJson("test.json");

		Gson g = new Gson();
		Semester s = g.fromJson(c, Semester.class);

		SubjectsDTO disciplinasDTO = new SubjectsDTO(true, s);
		disciplinasDTO.setSemestre(semester);
		log.info("/schedule/" + semester);
		return disciplinasDTO;
	}

	@RequestMapping(path = "/subjects", method = RequestMethod.GET) // all subjects
	public SubjectsDTO disciplinas() {
		String c = Helper.readJson("test.json");

		Gson g = new Gson();
		Semester s = g.fromJson(c, Semester.class);

		SubjectsDTO disciplinasDTO = new SubjectsDTO(true, s);
		log.info("subjects");
		return disciplinasDTO;
	}

	@RequestMapping(path = "/estatisticas", method = RequestMethod.GET) // statictics
	public Estatisticas estatisticas(@RequestParam(value = "token") String token) {
		Estatisticas e = new Estatisticas(1, 2, 3, 4, 5, "2019-1");
		return e;
	}

	@RequestMapping(path = "/semestre-atual", method = RequestMethod.GET) // current semester
	public Semester semestreAtual(@RequestParam(value = "token") String token) {
		return new Semester();
	}

}
