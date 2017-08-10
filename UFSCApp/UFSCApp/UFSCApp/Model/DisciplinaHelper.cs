using System;
using System.Collections.Generic;
using System.Text;

namespace UFSCApp.Model
{
    public class DisciplinaHelper
    {
        private Dictionary<string, List<string>> disciplinas;

        public Dictionary<string, int> pontos { get; set; }

        public DisciplinaHelper(List<Disciplina> disciplinas)
        {
            foreach (Disciplina d in disciplinas) {
                disciplinas.Add(d.Codigo, d.Requisitos);
            }
            this.pontos = new Dictionary<string, int>();
        }

        public Dictionary<string, int> Compute()
        {            
           foreach(KeyValuePair<string, List<string>> entry in disciplinas)
            {
                int count = 0;
                ComputeRecursive(entry.Key, ref count);
                pontos.Add(entry.Key, count);
                // do something with entry.Value or entry.Key
            }

            return pontos;
        }

        private void ComputeRecursive(string codigo, ref int i)
        {   
                List<string> rq;
                disciplinas.TryGetValue(codigo, out rq);
                if (rq.Count > 0){
                    i++;
                    foreach (string s : rq) 
                    {
                    ComputeRecursive(s, i);
                    }
                }
        }

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

        private static Dictionary<string, int> getPontuacao(List<Disciplina> disciplinas)
        {
            Dictionary<string, int> pontuacao = new Dictionary<string, int>();

            return pontuacao;
        }

        private static boolean hasRequerimentos(Disciplina disciplina) {
            return disciplina.Requisitos != null && disciplina.Requisitos.Count > 0;
        }
    }
}
