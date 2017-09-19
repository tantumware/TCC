var Stream = require('streamjs');

//private Dictionary<string, List<string>> Disciplinas;
// var disciplinas = [];

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

    var aux = Stream(curriculo).map(x => x.key).toArray();
    var count = Math.max.apply(null, aux);

   
    for (i = count; i >= 1; i--) {
        Stream(curriculo)
            .filter(d => d.key == i)
            .forEach(d => {
                // disciplinas.push({
                //     key: d.value.key, 
                //     value: d.value.value
                // })

                if (Stream(pontos).filter(p => p.key == d.value.key).findAny().isPresent()) {
                    Stream(pontos).filter(p => p.key == d.value.key).findAny().get().rank++;
                } else {
                    pontos.push({
                        key: d.value.key,
                        rank: 1
                    })
                }

                Stream(d.value.value).forEach(r => {
                    if (Stream(pontos).filter(p => p.key == r).findAny().isPresent()) {
                        Stream(pontos).filter(p => p.key == r).findAny().get().rank++;
                    } else {
                        pontos.push({
                            key: r,
                            rank: Stream(pontos).filter(p => p.key == d.value.key).findAny().get().rank
                        })
                    }
                })

            }) 
    }
    console.log(Stream(pontos).sort((p1, p2) => p1.rank > p2.rank).toArray());

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