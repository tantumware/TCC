import { SubjectsProvider } from './../../providers/subjects/subjects';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CapsulaComponent } from '../../components/capsula/capsula';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { Subject } from '../../models/subject';

@IonicPage()
@Component({
  selector: 'page-define-constraints',
  templateUrl: 'define-constraints.html',
})
export class DefineConstraintsPage {

  passo: string = '1';

  private botao: string = this.passo == "3" ? "Gerar grade de horários" : "Próximo Passo";

  private  periodosSelected: string[];

  private subjectsWanted = []

  private subjectsExcluded = []

  @ViewChild (CapsulaComponent) capsulaComponent;

  busca: string;

  private subjects;

  structure = {
    lower: 20,
    upper: 30
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public translate: TranslateService, private subjectsProvider: SubjectsProvider, private storage: Storage) {
  }

  ionViewDidLoad() {
    this.storage.get('allSubjects').then((val) => {
      this.subjects = val;
    });

   this.subjectsProvider.allSubjects()
    .map(res => res.json())
    .subscribe(res => {
      if (res.success) {
        this.subjects = res.result.disciplinas;
        this.storage.set('allSubjects', this.subjects);
      }
    }, err => {
      console.error('ERROR', err);
    });
  }

  onPeriodoSelected(event: string[]) {
    this.periodosSelected = event;
  }

  searchMateria(): void {
    this.doCheckbox(this.busca);
  }

  getClass(passo: string): string {
    if (this.passo == passo) {
      return "passo";
    } else {
      return "passo passo-hidden";
    }
  }

  onPassoChanged(event: any): void {
    this.botao = this.passo == "3" ? this.translate.instant('GENERATE_TIME_GRID') : this.translate.instant('NEXT_STEP');
  } 

  btnProximoPassoClicked(): void {
    if (this.passo == '3') {
      this.navCtrl.push('ResultadoPage');
    } else {
      this.passo = (Number(this.passo) + 1).toString();    
    }
  }

  getPeriods(): string[] {
    let periods: string[] = [];

    periods.push(this.translate.instant('MORNING'));
    periods.push(this.translate.instant('AFTERNOON'));
    periods.push(this.translate.instant('NIGHT'));

    return periods; 
  }

  getSubjectsWanted() {
    return this.subjectsWanted;
  }

  getSubjectsExcluded() {
    return this.subjectsExcluded;
  }

  doCheckbox(search: string) {
    let alert = this.alertCtrl.create();
    alert.setTitle('Which planets have you visited?');

    let subjects: Subject[] = this.getPossibleSubjects();
    subjects.forEach(s => {
      alert.addInput({
        type: 'checkbox',
        label: s.codigo + " - " + s.nome,
        value: s.codigo
      })
    })

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: (data: any) => {
          this.busca = "";
          data.forEach(element => {
            if (this.passo == '2') {
              this.subjectsWanted.push(this.getSubjectByCode(element));
            } else if (this.passo == '3') {
              this.subjectsExcluded.push(this.getSubjectByCode(element));
            }
          });
      }
    });

    alert.present();
  }

  getSubjectByCode(code: string): Subject {
    for (let i in this.subjects) {
      let subject: Subject = this.subjects[i];
      if (subject.codigo == code) {
        return subject;
      }
    }

    return undefined;
  }

  getPossibleSubjects(): Subject[] {
    let subjects: Subject[] = [];

    for (let i in this.subjects) {
      let subject: Subject = this.subjects[i];
      let nome: string = subject.nome;
      let codigo: string = subject.codigo;

      if (nome.toLowerCase().includes(this.busca.toLowerCase()) || codigo.toLowerCase().includes(this.busca.toLowerCase())) {
        subjects.push(subject);
      }
    }

    return subjects;
  }

}
