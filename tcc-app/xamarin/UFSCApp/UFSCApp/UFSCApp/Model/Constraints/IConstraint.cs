using System;
using System.Collections.Generic;
using System.Text;

namespace UFSCApp.Model.Constraints
{
    interface IConstraint
    {
        bool ApplyRule(Semestre semestre);

        Constraint Constraint();
    }
}
