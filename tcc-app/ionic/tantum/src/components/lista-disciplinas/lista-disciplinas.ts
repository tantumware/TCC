import { AlertController } from 'ionic-angular';
import { Disciplina } from './../../models/disciplina';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lista-disciplinas',
  templateUrl: 'lista-disciplinas.html'
})
export class ListaDisciplinasComponent {

  @Input() disciplinas: Disciplina[];

  @Output() onSwiped = new EventEmitter<boolean>();

  constructor(private alertCtrl: AlertController) {
  }

  itemSwiped(s: any) {
    if (s.direction == 2) { // 4 left
      this.onSwiped.emit(true);
    } else {
      this.onSwiped.emit(false);
    }
  }

  onDisciplinaClicked(disciplina: Disciplina): void {
    console.log(disciplina);
    let alert = this.alertCtrl.create({
      title: 'Detalhes da disciplina',
      subTitle: disciplina.nome,
      buttons: ['Voltar']
    });
    alert.present();
  }

}
