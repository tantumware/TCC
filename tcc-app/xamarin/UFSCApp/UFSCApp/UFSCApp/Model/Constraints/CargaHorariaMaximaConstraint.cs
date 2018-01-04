using System;
using System.Collections.Generic;
using System.Text;

namespace UFSCApp.Model.Constraints
{
    public class CargaHorariaMaximaConstraint : IConstraint
    {
        public bool ApplyRule(Semestre semestre)
        {
            throw new NotImplementedException();
        }

        public Constraint Constraint()
        {
            return Model.Constraint.CARGA_HORARIA_MAXIMA;
        }
    }
}
