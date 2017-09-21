package com.tantum.app.tantum.models;

import java.util.List;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class Disciplina {	

    private String Nome;
    
    private List<String> Requisitos;

    private int Fase;

    private List<String> Horarios;

    private int CargaHoraria;

    private boolean Obrigatoria;

}
