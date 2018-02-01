export class Dia {

    constructor(public nome: string, public nomeAbreviado: string, public visible: boolean) { }

    static getAllDias(): Dia[] {
        return [
            new Dia("Segunda", "SEG", true),
            new Dia("Terça", "TERÇ", true),
            new Dia("Quarta", "QUA", true),
            new Dia("Quinta", "QUI", true),
            new Dia("Sexta", "SEX", true),
            new Dia("Sábado", "SÁB", false),
            new Dia("Domingo", "DOM", false)
        ]
    }
}