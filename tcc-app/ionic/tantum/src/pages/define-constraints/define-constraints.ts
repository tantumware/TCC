import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CapsulaComponent } from '../../components/capsula/capsula';
import { TranslateService } from '@ngx-translate/core';
import { DisciplinaListItem } from '../../models/disciplia-list-item';

@IonicPage()
@Component({
  selector: 'page-define-constraints',
  templateUrl: 'define-constraints.html',
})
export class DefineConstraintsPage {

  passo: string = '1';

  private botao: string = this.passo == "3" ? "Gerar grade de horários" : "Próximo Passo";

  private  periodosSelected: string[];

  private subjectsWanted = [
    new DisciplinaListItem("Introdução a compiladores", "INE1231", null, null),
    new DisciplinaListItem("Introdução a compiladores", "INE1232", null, null),
    new DisciplinaListItem("Introdução a compiladores", "INE1233", null, null)
  ]

  private subjectsExcluded = [
    new DisciplinaListItem("Introdução a compiladores", "INE1231", null, null),
    new DisciplinaListItem("Introdução a compiladores", "INE1232", null, null),
    new DisciplinaListItem("Introdução a compiladores", "INE1233", null, null)
  ]

  @ViewChild (CapsulaComponent) capsulaComponent;

  busca: string;

  structure = {
    lower: 20,
    upper: 30
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public translate: TranslateService) {
  }

  ionViewDidLoad() {
  }

  onPeriodoSelected(event: string[]) {
    this.periodosSelected = event;
  }

  searchMateria(): void {
    console.log(this.busca);
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
    this.botao = this.passo == "3" ? "Gerar grade de horários" : "Próximo Passo";
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

    alert.addInput({
        type: 'checkbox',
        label: search,
        value: search,
        checked: true
    });

    alert.addInput({
        type: 'checkbox',
        label: search,
        value: 'value2'
    });

    alert.addInput({
        type: 'checkbox',
        label: search,
        value: 'value3'
    });

    alert.addInput({
        type: 'checkbox',
        label: 'Endor',
        value: 'value4'
    });

    alert.addInput({
        type: 'checkbox',
        label: 'Hoth',
        value: 'value5'
    });

    alert.addInput({
        type: 'checkbox',
        label: 'Jakku',
        value: 'value6'
    });

    alert.addInput({
        type: 'checkbox',
        label: 'Naboo',
        value: 'value6'
    });

    alert.addInput({
        type: 'checkbox',
        label: 'Takodana',
        value: 'value6'
    });

    alert.addInput({
        type: 'checkbox',
        label: 'Tatooine',
        value: 'value6'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: (data: any) => {
          this.busca = "";
          data.forEach(element => {
            if (this.passo == '2') {
              this.subjectsWanted.push(new DisciplinaListItem(element, "INE6666", null, null));
            } else if (this.passo == '3') {
              this.subjectsExcluded.push(new DisciplinaListItem(element, "INE6666", null, null));
            }
          });
      }
    });

    alert.present();
  }

}
