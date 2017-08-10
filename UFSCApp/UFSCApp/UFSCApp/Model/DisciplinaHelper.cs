using System;
using System.Collections.Generic;
using System.Text;

namespace UFSCApp.Model
{
    public class DisciplinaHelper
    {
        private Dictionary<string, List<string>> disciplinas;

        public Dictionary<string, int> Pontos { get; set; }

        public DisciplinaHelper(Dictionary<int, Dictionary<string, List<string>>> curriculo)
        {
            Pontos = new Dictionary<string, int>();
            
            // para cada materia da fase, começando pela ultima
            for (int i = curriculo.Count; i >= 1; i--)
            {
                foreach (KeyValuePair<string, List<string>> entry in curriculo[i])
                {
                    // controle da disciplina
                    if (Pontos.ContainsKey(entry.Key))
                    {
                        // se ja existe a disciplina, soma 1
                        Pontos[entry.Key] += 1;
                    }
                    else
                    {
                        // senao adiciona com valor 1
                        Pontos.Add(entry.Key, 1);
                    }

                    // controle dos requisitos

                    foreach (string requisito in entry.Value)
                    {
                        if (Pontos.ContainsKey(requisito))
                        {
                            // se ja existe o requisito, soma 1
                            Pontos[requisito] += 1;
                        }
                        else
                        {
                            // senao passa o valor da materia
                            Pontos.Add(requisito, Pontos[entry.Key]);
                        }

                    }
                }
                
            }

        }
        
    }
}
