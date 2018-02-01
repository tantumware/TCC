import { Disciplina } from './../../models/disciplina';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lista-disciplinas',
  templateUrl: 'lista-disciplinas.html'
})
export class ListaDisciplinasComponent {

  @Input() disciplinas: Disciplina[];

  @Output() onSwiped = new EventEmitter<boolean>();

  constructor() {
  }

  itemSwiped(s: any) {
    console.log(s.direction);
    if (s.direction == 2) { // 4 left
      this.onSwiped.emit(true);
    }
  }

}
