import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  onSlideClicked(): void {
    console.log('teste');
  }

  onGerarHorarioClicked(): void {
    this.navCtrl.push('DefinirCriteriosPage');
  }

  onSairClicked(): void {
    this.navCtrl.pop();
  }

  onEstatisticaClicked(): void {
    this.navCtrl.push('EstatísticasPage');
  }

}
