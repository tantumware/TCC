import { AlertController, Platform } from 'ionic-angular';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from '../../models/subject';

@Component({
  selector: 'subject-list',
  templateUrl: 'subject-list.html'
})
export class SubjectListComponent {

  @Input() subjects: Subject[];

  @Output() onSwiped = new EventEmitter<boolean>();

  constructor(private alertCtrl: AlertController, public plt: Platform) {
  }

  itemSwiped(s: any) {
    if (s.direction == 2) { // 4 left
      this.onSwiped.emit(true);
    } else {
      this.onSwiped.emit(false);
    }
  }

  getDisciplinas(): Subject[] {
    return this.subjects;
  }

  onDisciplinaClicked(disciplina: Subject): void {
    console.log(disciplina);
    let alert = this.alertCtrl.create({
      title: 'Detalhes da disciplina',
      subTitle: disciplina.nome,
      buttons: ['Voltar']
    });
    alert.present();
  }

  showLista(): boolean {
    if (this.subjects) {
      return this.subjects.length > 0;
    } else {
      return false;
    }
  }

  getLocalClass(): string {
    let clazz: string = "disciplia-local"
    if (this.plt.is('windows')) {
      clazz += " disciplia-local-wp"
    }
    return clazz;
  }

  getNomeClass(): string {
    let clazz: string = "disciplia-nome"
    if (this.plt.is('windows')) {
      clazz += " disciplia-nome-wp"
    }
    return clazz;
  }

}
