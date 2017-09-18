using System;
using System.Collections.Generic;
using System.Text;

namespace UFSCApp.Model
{
    public class Constraint
    {
        public Constraint CARGA_HORARIA_MINIMA = new Constraint(x => Convert.ToInt32(x) >= Curso.CargaHorariaMinima);
        public Constraint CARGA_HORARIA_MAXIMA = new Constraint(x => Convert.ToInt32(x) <= Curso.CargaHorariaMaxima);

        public Func<object, object> Func { get; set; }

        public Curso Curso { get; set; }

        public Constraint(Func<object, object> func)
        {
            this.Func = func;
        }

        public Constraint(Curso curso)
        {
            this.Curso = curso;
        }

    }
}
