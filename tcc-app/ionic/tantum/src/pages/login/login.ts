import { LoginProvider } from './../../providers/login-provider/login-provider';
import { Account } from './../../models/account';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { StorageKeys } from '../../utils/storage-keys';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  showView: boolean = false;

  username: string;
  password: string;

  idioma = "pt";

  manterConectado: boolean = true;

  constructor(public navCtrl: NavController,
    public loginProvider: LoginProvider,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    private storage: Storage,
    public loadingCtrl: LoadingController) {

    this.translateService.setDefaultLang('pt');

    this.storage.get(StorageKeys.LANGUAGE).then(idioma => {
      if (idioma) {
        this.idioma = idioma;
        this.translateService.use(this.idioma);
      }
    });
  }

  ionViewWillEnter() {
    this.username = null;
    this.password = null;
    this.showView = false;

    this.idioma = this.translateService.currentLang;
    this.checkKeepLoggedIn();
  }

  checkKeepLoggedIn() {
    this.storage.get(StorageKeys.ACCOUNT).then((acc) => {
      this.storage.get(StorageKeys.KEEP_LOGGED_IN).then(b => {
        this.manterConectado = b
        if (acc && b) {
          this.doLogin(acc);
        } else {
          this.showView = true;
        }
      });
      
    });
  }

  idiomaChanged(): void {
    this.translateService.use(this.idioma);
    this.storage.set(StorageKeys.LANGUAGE, this.idioma);
  }

  prepareLogin() {    
    let userName = this.username == null ? "" : this.username;
    let password = this.password == null ? "" : this.password;

    let acc = new Account(userName, password);
    this.doLogin(acc);
  }

  doLogin(acc: Account) {
    this.storage.set(StorageKeys.KEEP_LOGGED_IN, this.manterConectado);
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });      

    let timeOutid = setTimeout(() => {
      loading.present();
    }, 300);

    this.loginProvider.login(acc).subscribe(res => {
      this.storage.set(StorageKeys.ACCOUNT, acc);
      loading.dismiss();
      clearTimeout(timeOutid);
      this.navCtrl.push('MainPage');
    }, err => {
      loading.dismiss();
      clearTimeout(timeOutid);
      console.error('ERROR', err);
      this.showView = true;
      let toast = this.toastCtrl.create({
        message: 'DEU RUIM',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });

  }

  onSobreClick(): void {
    this.navCtrl.push('SobrePage');
  }
}
