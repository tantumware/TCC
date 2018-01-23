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

  manha: boolean = false;
  tarde: boolean = true;
  noite: boolean = false;  

  @ViewChild (CapsulaComponent) capsulaComponent;

  busca: string;

  structure = {
    lower: 20,
    upper: 30
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.capsulaComponent.periodos = ['teste1', 'teste2', 'teste3'];
  }

  onPeriodoSelected(event: string) {
    console.log(event);
  }

  searchMateria(): void {
    console.log(this.busca);
  }

  onPassoChanged(event: any): void {
    this.botao = this.passo == "3" ? "Gerar grade de horários" : "Próximo Passo";
  }  

  onManhaClicked(): void {
    this.manha = !this.manha;
  }

  onTardeClicked(): void {
    this.tarde = !this.tarde;
  }

  onNoiteClicked(): void {
    this.noite = !this.noite;
  }

  btnProximoPassoClicked(): void {
    if (this.passo == '3') {

    } else {
      this.passo = (Number(this.passo) + 1).toString();    
    }
  }

}
