package com.tantum.app.tantum;

import java.io.File;
import java.io.IOException;
import java.util.Arrays;
import java.util.Scanner;
import java.util.concurrent.atomic.AtomicLong;

import org.chocosolver.solver.Model;
import org.chocosolver.solver.Solver;
import org.chocosolver.solver.search.strategy.Search;
import org.chocosolver.solver.variables.IntVar;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.tantum.app.tantum.algoritmo.Algoritmo;
import com.tantum.app.tantum.models.Curso;
import com.tantum.app.tantum.models.Semestre;
import com.tantum.app.tantum.models.Settings;

@RestController
public class TantumController {

	private static final String template = "Hello, %s!";
	private final AtomicLong counter = new AtomicLong();

	@RequestMapping(path = "/greeting", method = RequestMethod.GET)
	public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
		return new Greeting(this.counter.incrementAndGet(), String.format(template, name));
	}

	@RequestMapping(path = "/test", method = RequestMethod.GET)
	public String test() {
		StringBuilder result = new StringBuilder("");

		// Get file from resources folder
		ClassLoader classLoader = TantumApplication.class.getClassLoader();
		File file = new File(classLoader.getResource("test.json").getFile());

		try (Scanner scanner = new Scanner(file)) {

			while (scanner.hasNextLine()) {
				String line = scanner.nextLine();
				result.append(line).append("\n");
			}

			scanner.close();

		} catch (IOException e) {
			e.printStackTrace();
		}

		Gson g = new Gson();
		Semestre s = g.fromJson(result.toString(), Semestre.class);

		Algoritmo a = new Algoritmo(new Curso(s.getDisciplinas()));
		a.rankDisciplinas();
		a.checkConstraints(new Settings(5, 3, true, false, false, Arrays.asList(), Arrays.asList()));
		System.out.println(a.getRank());
		a.getSemestres().entrySet().stream()
				.forEach(e -> System.out.println(e.getKey() + " " + e.getValue().getDisciplinas()));
		System.out.println(a.getSemestres().get(1).getDisciplinas());

		StringBuilder sb = new StringBuilder();

		// 1. Create a Model
		Model model = new Model("my first problem");
		// 2. Create variables
		IntVar x = model.intVar("teste", 5);
		IntVar y = model.intVar("teste2", 6);

		IntVar max = model.intVar(6);

		model.max(max, x, y).post();

		Solver solver = model.getSolver();
		// 5. Define the search strategy
		solver.setSearch(Search.inputOrderLBSearch(x, y));
		// 6. Launch the resolution process
		solver.solve();

		// sb.append(solver.getBestSolutionValue());
		// 7. Print search statistics
		solver.printStatistics();

		return sb.toString();
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
