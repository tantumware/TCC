import { Dia } from './../../models/dia';
import { Disciplina } from './../../models/disciplina';
import { Component, ViewChild, AfterContentChecked } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-grade-horarios',
  templateUrl: 'grade-horarios.html',
})
export class GradeHorariosPage {

  private passo: string;

  private dia: number;

  private dias: Dia[];

  @ViewChild('slides') slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dia = new Date().getDay() - 1; // começa na segunda
    console.log(this.dia);
    this.dias = Dia.getAllDias();
  }

  ionViewDidLoad() {
    this.passo = '1';
  }
  
  onPassoChanged(): void {
    console.log('passo');
  }

  onSlideChanged(event: any): void {
    this.dia = event._activeIndex;
  }

  onSwiped(event: boolean): void {
    console.log("swipe");
    if (event) {
      this.swipeRight();
    } else {
      this.swipeLeft(); 
    }
  }
  
  swipeRight(): void {
    this.dia = this.dia + 1;
    
    console.log('right'+this.dia);
    this.slides.slideTo(this.dia);
  }

  swipeLeft(): void {
    this.dia = this.dia - 1;
    
    console.log('left'+this.dia);
    this.slides.slideTo(this.dia);
  }

  onDiaClicked(dia: Dia): void {
    this.dia = this.dias.indexOf(dia);
    this.slides.slideTo(this.dia);
  }

  getDisciplinas(): Disciplina[] {
    return [new Disciplina('Disciplina 1'), new Disciplina('Disciplina 2'), new Disciplina('Disciplina 3')]
  }

  getClass(dia: Dia): string {
    let clazz: string = "";
    if (!dia.visible) {
      clazz += "dia-hidden ";
    }
    if (this.dias[this.dia].nomeAbreviado == dia.nomeAbreviado){
      clazz += "dia-selected";
    }
    return clazz;
  }

}
