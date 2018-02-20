import { TokenHelper } from './../../models/token';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    let encoded = TokenHelper.encodeToken('teste');
    console.log(encoded);
    let plain = TokenHelper.decodeToken(encoded);
    console.log(plain);
    console.log('ionViewDidLoad MainPage');
    
    // set a key/value
  this.storage.set('age', 25);

  // Or to get a key/value pair
  this.storage.get('age').then((val) => {
    console.log('Your age is', val);
  });

  }

  onHorariosClicked(): void {
    this.navCtrl.push('GradeHorariosPage');
  }

  onGerarHorarioClicked(): void {
    this.navCtrl.push('DefinirCriteriosPage');
  }

  onSairClicked(): void {
    console.log(this.navCtrl.length());
    if (this.navCtrl.length() > 1) {
      console.log("hiuhsiuahishas");
      this.navCtrl.remove(0);
    }
    this.navCtrl.push('LoginPage');
    this.storage.get('age').then((val) => {
      console.log('Your age is', val);
    });
  }

  onEstatisticaClicked(): void {
    this.navCtrl.push('EstatísticasPage');
  }

}
