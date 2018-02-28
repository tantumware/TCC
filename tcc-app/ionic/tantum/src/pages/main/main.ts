import { UserDataProvider } from './../../providers/user-data/user-data';
import { UserData } from './../../models/user-data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { DisciplinaListItem } from '../../models/disciplia-list-item';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  private userData: UserData = new UserData("", "");

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public translateService: TranslateService, public userDataProvider: UserDataProvider) {
  }

  ionViewDidLoad() {
    this.getUserData();

    // set a key/value
    this.storage.set('age', 25);

    // Or to get a key/value pair
    this.storage.get('age').then((val) => {
      console.log('Your age is', val);
    });
  }

  getUserData(): void {
    this.storage.get('userData').then(val => {
      if (val) {
        this.userData = val;
      }
    });
    this.userData = new UserData("nome", "2018.1");

    /*this.userData = this.userDataProvider.userData()
      .map(res => res.json())
      .subscribe(res => {
        if (res.success) {
          this.userData = res;
          this.storage.set('userData', this.userData);
        }
      }, err => {
        console.error('ERROR', err);
      }); */
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

  getDisciplinas() {
    return [new DisciplinaListItem("Nome Disciplinaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "INE1337", "04:20", "CTC-123")];
  }

}
