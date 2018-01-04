﻿using System;
using System.Collections.Generic;
using System.Text;

namespace UFSCApp.Model
{
    public class Curso
    {
        public string Nome { get; set; }

        public List<Disciplina> Disciplinas { get; set; }

        public int CargaHorariaMinima { get; set; }

        public int CargaHorariaMaxima { get; set; }

    }
}
