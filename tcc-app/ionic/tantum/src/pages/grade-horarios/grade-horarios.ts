import { SubjectHelper } from './../../utils/subject-helper';
import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

import { CalendarUtils } from './../../utils/calendar';
import { Dia } from './../../models/dia';
import { Subject } from './../../models/subject';

@IonicPage()
@Component({
  selector: 'page-grade-horarios',
  templateUrl: 'grade-horarios.html',
})
export class GradeHorariosPage {

  private passo: string;

  private dia: number;

  private dias: Dia[];

  private disciplinas: Subject[];

  @ViewChild('slides') slides: Slides;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private storage: Storage, 
    private cal: CalendarUtils) {
      
    this.dia = new Date().getDay() - 1; // começa na segunda
    if (this.dia < 0) {
      this.dia = 0;
    }
    this.dias = this.cal.getAllDias();

    this.storage.get('disciplinas').then(d => {
      if (d) {
        this.disciplinas = d;
      }
    });
  }

  ionViewDidLoad() {
    this.passo = '1';
  }

  onPassoChanged(): void {
  }

  onSlideChanged(event: any): void {
    if (event._activeIndex < 5 && event._activeIndex >= 0) {
      this.dia = event._activeIndex;
    }
  }

  onSwiped(event: boolean): void {
    if (event) {
      this.swipeRight();
    } else {
      this.swipeLeft();
    }
  }

  swipeRight(): void {
    if (this.dia < 5) {
      this.dia = this.dia + 1;
    }
    this.slides.slideTo(this.dia);
  }

  swipeLeft(): void {
    if (this.dia > 0) {
      this.dia = this.dia - 1;
    }
    this.slides.slideTo(this.dia);
  }

  onDiaClicked(dia: Dia): void {
    this.dia = this.dias.indexOf(dia);
    this.slides.slideTo(this.dia);
  }

  getDisciplinas(dia?: string): Subject[] {
    return SubjectHelper.list(this.disciplinas, dia);
  }

  getAllDisciplinas(): Subject[] {
    return SubjectHelper.list(this.disciplinas);
  }

  getClassDia(dia: Dia): string {
    let clazz: string = "";
    if (!dia.visible) {
      clazz += "dia-hidden ";
    }
    if (this.dias[this.dia].nomeAbreviado == dia.nomeAbreviado) {
      clazz += "dia-selected";
    }
    return clazz;
  }

  getClass(passo: string): string {
    if (this.passo == passo) {
      return "";
    } else {
      return "passo-hidden";
    }
  }

}
