using System;
using System.Collections.Generic;
using System.Text;

namespace UFSCApp.Model.Constraints
{
    public class ConstraintException : Exception
    {
        public ConstraintException(string message) : base(message)
        {
        }
    }
}
