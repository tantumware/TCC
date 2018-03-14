import { DisciplinaListItem } from './../../models/disciplia-list-item';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Subject } from '../../models/subject';

@Component({
  selector: 'subject-action-list',
  templateUrl: 'subject-action-list.html'
})
export class SubjectActionListComponent {

  @Input() subjects: Subject[];

  @Output() onRemoved = new EventEmitter<Subject>();

  constructor(public plt: Platform) {
  }

  remove(disciplina): void {
    let index = this.subjects.indexOf(disciplina);
    this.subjects.splice(index, 1);
    this.onRemoved.emit(disciplina);
  }
  
  getValue(disciplia: Subject): string {
    return disciplia.codigo + " - " + disciplia.nome;
  }

}
