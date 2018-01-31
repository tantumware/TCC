import { Disciplina } from './../../models/disciplina';
import { Semestre } from './../../models/semestre';
import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'lista-disciplinas',
  templateUrl: 'lista-disciplinas.html'
})
export class ListaDisciplinasComponent {

  @Input() disciplinas: Disciplina[]; 

  constructor() {
  }

}
