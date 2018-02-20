import { Disciplina } from './../../models/disciplina';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'grade-horario',
  templateUrl: 'grade-horario.html'
})
export class GradeHorarioComponent {

  text: string;

  @Input() disciplinas: Disciplina[];

  constructor() {
    this.text = 'aaaaaaaaaaaaaaaaa';
  }

  getValue(horario: string): string {
    return horario;
  }

}
