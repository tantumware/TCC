import { FormatterUtils } from './../../utils/formatter';
import { DisciplinaListItem } from './../../models/discipliaListItem';
import { Dia } from './../../models/dia';
import { Disciplina } from './../../models/disciplina';
import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { HorariosProvider } from '../../providers/horarios/horarios';

@IonicPage()
@Component({
  selector: 'page-grade-horarios',
  templateUrl: 'grade-horarios.html',
})
export class GradeHorariosPage {

  private passo: string;

  private dia: number;

  private dias: Dia[];

  private disciplinas: Disciplina[];

  @ViewChild('slides') slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams, private horarios: HorariosProvider, private storage: Storage) {
    this.dia = new Date().getDay() - 1; // começa na segunda
    this.dias = Dia.getAllDias();

    this.storage.get('disciplinas').then(d => this.disciplinas = d);

    horarios.gradeDeHorarios()
      .map(res => res.json())
      .subscribe(res => {
        if (res.success) {
          this.disciplinas = res.result.disciplinas;
          this.storage.set('disciplinas', this.disciplinas);
        }
      }, err => {
        console.error('ERROR', err);
      });
  }

  ionViewDidLoad() {
    this.passo = '1';
  }

  onPassoChanged(): void {
  }

  onSlideChanged(event: any): void {
    this.dia = event._activeIndex;
  }

  onSwiped(event: boolean): void {
    if (event) {
      this.swipeRight();
    } else {
      this.swipeLeft();
    }
  }

  swipeRight(): void {
    this.dia = this.dia + 1;
    // arrumar qnd fica maior
    this.slides.slideTo(this.dia);
  }

  swipeLeft(): void {
    this.dia = this.dia - 1;
    // arrumar quando fica menor
    this.slides.slideTo(this.dia);
  }

  onDiaClicked(dia: Dia): void {
    this.dia = this.dias.indexOf(dia);
    this.slides.slideTo(this.dia);
  }

  getDisciplinas(dia?: string): DisciplinaListItem[] {
    let disciplinasDia: DisciplinaListItem[] = [];

    for (let k in this.disciplinas) {
      let disciplina = this.disciplinas[k];
      for (let j in disciplina.horarios) {
        let horario = disciplina.horarios[j];
        if (dia == null || horario.startsWith(dia)) {
          let aux = horario.split("/");
          let item = new DisciplinaListItem(disciplina.nome, disciplina.codigo, FormatterUtils.formatHour(aux[0].trim()), aux[1].trim());
          disciplinasDia.push(item);
        }
      }
    }

    return disciplinasDia;
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
