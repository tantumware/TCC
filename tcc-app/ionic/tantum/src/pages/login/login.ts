import { LoginProvider } from './../../providers/login-provider/login-provider';
import { Account } from './../../models/account';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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
    private storage: Storage) {
      
    this.translateService.setDefaultLang('pt');

    this.storage.get('idioma').then(idioma => {
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

    this.storage.get('account').then((val) => {
      if (val) {
        this.navCtrl.push('MainPage');
      } else {
        this.showView = true;
      }
    });
  }

  idiomaChanged(): void {
    this.translateService.use(this.idioma);
    this.storage.set('idioma', this.idioma);
  }

  doLogin() {
    let userName = this.username == null ? "" : this.username;
    let password = this.password == null ? "" : this.password;

    let acc = new Account(userName, password);

    if (this.manterConectado) {
      this.storage.set('account', acc);
    }

    this.loginProvider.login(acc).subscribe(res => {
      this.navCtrl.push('MainPage');
    })


  //  this.user.login(this.account).subscribe((resp) => {
  //  }, (err) => {
  //    this.navCtrl.push('MainPage');
      // Unable to log in
    //  let toast = this.toastCtrl.create({
     //   message: this.loginErrorString,
    //    duration: 3000,
    //    position: 'top'
    //  });
   //   toast.present();
    //});
  }

  onSobreClick(): void {
    this.navCtrl.push('SobrePage');
  }
}
