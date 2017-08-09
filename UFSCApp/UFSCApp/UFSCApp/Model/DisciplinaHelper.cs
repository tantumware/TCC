using System;
using System.Collections.Generic;
using System.Text;

namespace UFSCApp.Model
{
    public static class DisciplinaHelper
    {
        public static List<Disciplina> selecionarMelhoresDisciplinas(List<Disciplina> disciplinasCurso, List<Disciplina> disciplinasCursadas, List<Disciplina> disciplinasDesejadas)
        {
            Dictionary<string, int> pesos = new Dictionary<string, int>();

            foreach (Disciplina d in disciplinasCurso)
            {
                foreach (Disciplina req in d.Requisitos)
                {
                    if (pesos.ContainsKey(d.Codigo))
                    {

                    } else
                    {
                        pesos.Add(d.Codigo, d.Requisitos == null || d.Requisitos.Count == 0 ? 0 : 1);
                    }
                }
            }


            return null;
        } 

    }
}
