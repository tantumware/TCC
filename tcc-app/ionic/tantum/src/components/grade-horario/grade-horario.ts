import { TranslateService } from '@ngx-translate/core';
import { Component, Input } from '@angular/core';
import { AlertController } from 'ionic-angular';

import { Subject } from '../../models/subject';

@Component({
  selector: 'grade-horario',
  templateUrl: 'grade-horario.html'
})
export class GradeHorarioComponent {

  @Input() subjects: Subject[];

  private afternoon: string;
  private morning: string;
  private night: string;

  private monday: string;
  private tuesday: string;
  private wednesday: string;
  private thursday: string;
  private friday: string;

  constructor(private alertCtrl: AlertController, private translate: TranslateService) {
    this.afternoon = this.translate.instant('AFTERNOON');
    this.morning = this.translate.instant('MORNING');
    this.night = this.translate.instant('NIGHT');

    this.monday = this.translate.instant('MONDAY_SHORT');
    this.tuesday = this.translate.instant('TUESDAY_SHORT');
    this.wednesday = this.translate.instant('WEDNESDAY_SHORT');
    this.thursday = this.translate.instant('THURSDAY_SHORT');
    this.friday = this.translate.instant('FRIDAY_SHORT');
  }

  getValue(horario: string): string {
    if (this.subjects && this.subjects.length > 0) {
      for (let i in this.subjects) {
        for (let j in this.subjects[i].horarios) {
          if (this.subjects[i].horarios[j].startsWith(horario)) {
            return this.subjects[i].codigo;
          }
        }
      }
    }
    return "";
  }

  onSlideChanged(event: any): void {
    console.log(event);
  }

  onSwiped(event: any): void {
    console.log(event);
  }

  onDisciplinaClicked(event: any) {
    let text;
    if (event.srcElement.id == '') {
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
