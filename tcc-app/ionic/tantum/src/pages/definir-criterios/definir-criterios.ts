import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  busca: string;

  structure = {
    lower: 20,
    upper: 30
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DefinirCriteriosPage');
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

}
