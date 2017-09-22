package com.tantum.app.tantum;

import java.util.Arrays;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.tantum.app.tantum.models.Algoritmo;
import com.tantum.app.tantum.models.Curso;
import com.tantum.app.tantum.models.Semestre;
import com.tantum.app.tantum.models.Settings;

@RestController
public class TantumController {

	private static final String senha = "trviXxFhBa";

	private static final String template = "Hello, %s!";
	private final AtomicLong counter = new AtomicLong();

	@RequestMapping(path = "/greeting", method = RequestMethod.GET)
	public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
		return new Greeting(this.counter.incrementAndGet(), String.format(template, name));
	}

	@RequestMapping(path = "/semestre", method = RequestMethod.POST)
	public Semestre semestre(@RequestBody String teste) { // TODO vir o settings
		Gson g = new Gson();
		Semestre s = g.fromJson(teste, Semestre.class);

		Algoritmo a = new Algoritmo(new Curso(s.getDisciplinas()));
		a.rankDisciplinas();
		a.checkConstraints(new Settings(22, 11, true, false, false, Arrays.asList(), Arrays.asList()));

		System.out.println(a.getSemestres());

		return s;
	}

}
