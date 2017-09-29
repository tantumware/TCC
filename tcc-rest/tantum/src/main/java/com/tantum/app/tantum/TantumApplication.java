package com.tantum.app.tantum;

import java.io.File;
import java.io.IOException;
import java.util.Arrays;
import java.util.Scanner;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.google.gson.Gson;
import com.tantum.app.tantum.algoritmo.Algoritmo;
import com.tantum.app.tantum.models.Curso;
import com.tantum.app.tantum.models.Semestre;
import com.tantum.app.tantum.models.Settings;

@SpringBootApplication
public class TantumApplication {

	public static void main(String[] args) {
		SpringApplication.run(TantumApplication.class, args);

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
	}
}
