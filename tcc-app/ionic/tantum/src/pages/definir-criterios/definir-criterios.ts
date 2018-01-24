import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CapsulaComponent } from '../../components/capsula/capsula';

@IonicPage()
@Component({
  selector: 'page-definir-criterios',
  templateUrl: 'definir-criterios.html',
})
export class DefinirCriteriosPage {

  passo: string = '1';

  private botao: string = this.passo == "3" ? "Gerar grade de horários" : "Próximo Passo";

  private  periodosSelected: string[];

  @ViewChild (CapsulaComponent) capsulaComponent;

  busca: string;

  structure = {
    lower: 20,
    upper: 30
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  onPeriodoSelected(event: string[]) {
    this.periodosSelected = event;
  }

  searchMateria(): void {
    console.log(this.busca);
  }

  getClass(passo: string): string {
    if (this.passo == passo) {
      return "passo";
    } else {
      return "passo passo-hidden";
    }
  }

  onPassoChanged(event: any): void {
    if (this.passo == '1'){
      // this.capsulaComponent.periodos = ['Manhã', 'Tarde', 'Noite'];
    }
    this.botao = this.passo == "3" ? "Gerar grade de horários" : "Próximo Passo";
  } 

  btnProximoPassoClicked(): void {
    if (this.passo == '3') {
      this.navCtrl.push('ResultadoPage');
    } else {
      this.passo = (Number(this.passo) + 1).toString();    
    }
  }

}
