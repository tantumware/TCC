import { Disciplina } from './../../models/disciplina';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-grade-horarios',
  templateUrl: 'grade-horarios.html',
})
export class GradeHorariosPage {

  passo: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.passo = '1';
  }

  onPassoChanged(): void {

  }

  getDisciplinas(): Disciplina[] {
    return [new Disciplina('Disciplina 1'), new Disciplina('Disciplina 2'), new Disciplina('Disciplina 3')]
  }

}
