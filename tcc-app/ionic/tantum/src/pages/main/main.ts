import { Subject } from './../../models/subject';
import { UserData } from './../../models/user-data';
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

  private userData: UserData = new UserData("", "");

  private disciplinas: Subject[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public translateService: TranslateService) {
  }

  ionViewDidLoad() {
    this.getUserData();

    this.storage.get('disciplinas').then(d => {
      if (d) {
        this.disciplinas = d;
      }
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
    this.navCtrl.push('DefineConstraintsPage');
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
    return [new Subject("Linguagens formais e compiladores", "INE1337", 1, 2, true, ["3.0820-2 / CTC-CTC102"], null), 
    new Subject("Linguagens formais e compiladores", "INE1337", 1, 2, true, ["3.0820-2 / CTC-CTC102"], null)];
  }

}
