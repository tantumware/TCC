import { TokenHelper } from './../../models/token';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public translateService: TranslateService) {
  }

  ionViewDidLoad() {    
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
      this.navCtrl.remove(0);
    }
    this.storage.set('account', null);
    this.navCtrl.push('LoginPage');
  }

  onEstatisticaClicked(): void {
    this.navCtrl.push('EstatisticasPage');
  }

}
