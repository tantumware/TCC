import { DisciplinaListItem } from './../../models/disciplia-list-item';
import { Component, Input } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'grade-horario',
  templateUrl: 'grade-horario.html'
})
export class GradeHorarioComponent {

  @Input() disciplinas: DisciplinaListItem[];

  constructor(private alertCtrl: AlertController) {
  }

  getValue(horario: string): string {
    for (let i in this.disciplinas) {
      if (this.disciplinas[i].horario.startsWith(horario)){
        return this.disciplinas[i].local;
      }
    }
    return "";
  }

  onDisciplinaClicked(event: any) {
    let text; 
    if (event.srcElement.id == ''){
      text = event.srcElement.innerHTML;
    } else {
      text = event.srcElement.id;
    }

    let alert = this.alertCtrl.create({
      title: text,
      subTitle: '10% of battery remaining',
      message: text,
      buttons: ['Voltar']
    });
    alert.present();
  }



}
