import { DisciplinaListItem } from './../../models/disciplia-list-item';
import { AlertController, Platform } from 'ionic-angular';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from '../../models/subject';

@Component({
  selector: 'lista-disciplinas',
  templateUrl: 'lista-disciplinas.html'
})
export class ListaDisciplinasComponent {

  @Input() disciplinas: DisciplinaListItem[];

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
    return this.disciplinas.length > 0;
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
