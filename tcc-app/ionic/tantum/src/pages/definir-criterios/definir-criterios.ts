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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DefinirCriteriosPage');
  }

  onPassoChanged(event: any): void {
    this.botao = this.passo == "3" ? "Gerar grade de horários" : "Próximo Passo";
  }

}
