import { TokenHelper } from './../../models/token';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Token } from '@angular/compiler';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let encoded = TokenHelper.encodeToken('teste');
    console.log(encoded);
    let plain = TokenHelper.decodeToken(encoded);
    console.log(plain);
    console.log('ionViewDidLoad MainPage');
  }

  onHorariosClicked(): void {
    this.navCtrl.push('GradeHorariosPage');
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
