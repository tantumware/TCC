using System;
using System.Collections.Generic;
using System.Text;

namespace UFSCApp.Model
{
    public class Disciplina
    {

        public string Codigo { get; set; }

        public string Nome { get; set; }

        public List<Disciplina> Requisitos { get; set; }

    }
}
