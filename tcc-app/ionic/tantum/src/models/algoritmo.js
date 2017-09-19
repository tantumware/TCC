var Stream = require('streamjs');

//private Dictionary<string, List<string>> Disciplinas;
var disciplinas = [];

//public Dictionary<string, int> Pontos {get; set; }
var pontos = [];

//private Dictionary<int, Dictionary<string, List<string>>> curriculo;
var curriculo = [];

function createCurriculo(listaDisciplinas) {
    listaDisciplinas.forEach(d => {
        curriculo.push({ 
            key: d.fase, 
            value: {
                key: d.nome,
                value: d.requisitos
            }});
    });
    var x = Stream(curriculo).filter(x => true).toArray();
    console.log(x);
}

function rank(listaDisciplinas) {
    createCurriculo(listaDisciplinas);
    
}


var x = [
    { 
        nome: "A", 
        codigo: "A1", 
        fase: 1,
        requisitos: [] 
    },
    { 
        nome: "B", 
        codigo: "A2", 
        fase: 1,
        requisitos: []
    },
    { 
        nome: "C", 
        codigo: "A3", 
        fase: 1,
        requisitos: []
    },
    { 
        nome: "D", 
        codigo: "A4", 
        fase: 2,
        requisitos: ["A"] 
    },
    { 
        nome: "E", 
        codigo: "A4", 
        fase: 2,
        requisitos: []
    },    
    { 
        nome: "F", 
        codigo: "A4", 
        fase: 2,
        requisitos: []
    }, { 
        nome: "G", 
        codigo: "A4", 
        fase: 3,
        requisitos: ["F"]
    },    
    { 
        nome: "H", 
        codigo: "A4", 
        fase: 3,
        requisitos: ["D"]
    },
    { 
        nome: "I", 
        codigo: "A4", 
        fase: 4,
        requisitos: []
    },    
    { 
        nome: "J", 
        codigo: "A4", 
        fase: 4,
        requisitos: ["H", "B"]
    },    
];

rank(x);


 /*  public DisciplinaHelper(List < Disciplina > disciplinas)
{
    // recebe a lista de disciplinas do curso e monta do map
    curriculo = new Dictionary<int, Dictionary<string, List<string>>>();

    disciplinas.ForEach(d => {
        if (!curriculo.ContainsKey(d.Fase)) {
            curriculo.Add(d.Fase, new Dictionary<string, List<string>>());
        }
        curriculo[d.Fase].Add(d.Codigo, d.Requisitos);
    });
}

        public void RankDisciplinas()
{
    Pontos = new Dictionary<string, int>();
    Disciplinas = new Dictionary<string, List<string>>();

    // para cada materia da fase, começando pela ultima
    for (int i = curriculo.Count; i >= 1; i--)
    {
        foreach(KeyValuePair < string, List < string >> entry in curriculo[i])
        {
            // cria estrututra que contém todas as disciplinas e seus requisitos
            Disciplinas.Add(entry.Key, entry.Value);

            // controle da disciplina
            if (Pontos.ContainsKey(entry.Key)) {
                // se ja existe a disciplina, soma 1
                Pontos[entry.Key] += 1;
            }
            else {
                // senao adiciona com valor 1
                Pontos.Add(entry.Key, 1);
            }

            // controle dos requisitos
            foreach(string requisito in entry.Value)
            {
                if (Pontos.ContainsKey(requisito)) {
                    // se ja existe o requisito, soma 1
                    Pontos[requisito] += 1;
                }
                else {
                    // senao passa o valor da materia
                    Pontos.Add(requisito, Pontos[entry.Key]);
                }

            }
        }

    }
}

        public List < string > Compute(List < string > disciplinasCursadas, List < string > disciplinasDesejadas)
{
    List < string > result = new List<string>();

    Dictionary < string, int > possiveisDisciplinas = new Dictionary<string, int>();

    // cria o a lista de materias que nao foram cursadas ordenadas por pontos
    foreach(KeyValuePair < string, int > entry in Pontos)
    {
        // se ele ja cursou, não adiciona na lista de possiveis materias
        if (!disciplinasCursadas.Contains(entry.Key)) {
            // se nao tem requisitos, adiciona na lista de possiveis
            if (Disciplinas[entry.Key].Count == 0) {
                possiveisDisciplinas.Add(entry.Key, entry.Value);
            }
            // senao, verifica se ja cursou os requisitos
            else {
                bool todosRequisitos = true;
                foreach(string req in Disciplinas[entry.Key])
                {
                    // se nao tiver cursado o requisito, seta todos os requisitos como false
                    if (!disciplinasCursadas.Contains(req)) {
                        todosRequisitos = false;
                        break;
                    }
                }

                // se tiver todos os requisitos adiciona na lista de possiveis disciplinas
                if (todosRequisitos) {
                    possiveisDisciplinas.Add(entry.Key, entry.Value);
                }
            }

        }
    }

    int i = 0;
    // ordena a lista por peso
    possiveisDisciplinas.OrderBy(e => e.Value);
    foreach(KeyValuePair < string, int > entry in possiveisDisciplinas)
    {
        // TODO falta metodo pra saber todas as materias, com o horario, se tem choque de horário
        // e falta considerar disciplinas desejadas
        if (i == 3) {
            break;
        }

        result.Add(entry.Key);

        i++;
    }


    return result;
}


    }
}
*/