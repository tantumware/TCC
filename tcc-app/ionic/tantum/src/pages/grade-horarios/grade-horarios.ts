import { Disciplina } from './../../models/disciplina';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-grade-horarios',
  templateUrl: 'grade-horarios.html',
})
export class GradeHorariosPage {

  passo: string;

  @ViewChild('slides') slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.passo = '1';
  }

  onPassoChanged(): void {

  }

  onSwiped(event: boolean): void {
    console.log(event);
    this.slides.slideTo(1, 500);
  }

  getDisciplinas(): Disciplina[] {
    return [new Disciplina('Disciplina 1'), new Disciplina('Disciplina 2'), new Disciplina('Disciplina 3')]
  }

}
