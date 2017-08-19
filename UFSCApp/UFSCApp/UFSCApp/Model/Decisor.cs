using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace UFSCApp.Model
{
    public class Decisor
    {
        public Action<int> CargaHorariaMinima { private get; set; }

        public Action<int> CargaHorariaMaxima{ private get; set; }

        public Action<List<string>> HorariosPermitidos { private get; set; }

        private DisciplinaHelper helper;

        private Curso curso;

        public Decisor(Curso c)
        {
            helper = new DisciplinaHelper(c.Disciplinas);
            curso = c;
            helper.RankDisciplinas();
            foreach (KeyValuePair<string, int> entry in helper.Pontos)
            {
                System.Diagnostics.Debug.WriteLine("{0} : {1}", entry.Key, entry.Value);
            }
        }


    }
}
