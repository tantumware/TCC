using System;
using System.Collections.Generic;
using System.Text;

namespace UFSCApp.Model
{
    public class Disciplina
    {

        public string Codigo { get; set; }

        public string Nome { get; set; }

        public List<string> Requisitos { get; set; }

        public int Fase { get; set; }

        public List<string> Horarios { get; set; }

        public int CargaHoraria { get; set; }

        public bool Obrigatoria { get; set; }

    }
}
