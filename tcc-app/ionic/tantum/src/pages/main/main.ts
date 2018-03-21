import { Subject } from './../../models/subject';
import { UserData } from './../../models/user-data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  private disciplinas: Subject[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private storage: Storage, 
    public translateService: TranslateService) {
  }

  ionViewDidLoad() {
    this.storage.get('disciplinas').then(d => {
      if (d) {
        this.disciplinas = d;
      }
    });
  }

  onHorariosClicked(): void {
    this.navCtrl.push('GradeHorariosPage');
  }

  onGerarHorarioClicked(): void {
    this.navCtrl.push('DefineConstraintsPage');
  }

  onSairClicked(): void {
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
