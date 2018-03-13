import { DisciplinaListItem } from './../../models/disciplia-list-item';
import { Component, Input } from '@angular/core';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'subject-action-list',
  templateUrl: 'subject-action-list.html'
})
export class SubjectActionListComponent {

  @Input() subjects: DisciplinaListItem[]; 

  constructor(public plt: Platform) {
  }

  remove(disciplina): void {
    let index = this.subjects.indexOf(disciplina);
    this.subjects.splice(index, 1);
  }

  getRemoveClass(): string {
    let clazz: string = "remove-subject"
    if (this.plt.is('android')) {
      clazz += " remove-subject-android"
    }
    return clazz;
  }

  getValue(disciplia: DisciplinaListItem): string {
    return disciplia.codigo + " - " + disciplia.nome;
  }

}
