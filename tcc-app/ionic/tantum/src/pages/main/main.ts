import { Account } from './../../models/account';
import { StorageKeys } from './../../utils/storage-keys';
import { Subject } from './../../models/subject';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { ScheduleProvider } from '../../providers/horarios/schedule-provider';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  private disciplinas: Subject[];

  private account: Account;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private storage: Storage, 
    public translateService: TranslateService,
    private scheduleProvider: ScheduleProvider) {
  }

  ionViewDidLoad() {
    this.storage.get('disciplinas').then(d => {
      if (d) {
        this.disciplinas = d;
      }
    });

    this.storage.get(StorageKeys.ACCOUNT).then(acc => this.account = acc);

    // mudar esse ano automaticamente
    this.scheduleProvider.schedule("2018-1")
    .map(res => res.json())
    .subscribe(res => {
      console.log(res);
      if (res.success) {
        this.disciplinas = res.result.disciplinas;
        this.storage.set('disciplinas', this.disciplinas);
      }
    }, err => {
      console.error('ERROR', err);
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
    this.storage.set(StorageKeys.ACCOUNT, null);
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
