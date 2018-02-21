import { Account } from './../../models/account';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { User } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type

  showView: boolean = false;

  username: string;
  password: string;

  idioma = "pt-br";

  manterConectado: boolean = true;

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController, public user: User, public toastCtrl: ToastController, public translateService: TranslateService, private storage: Storage) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  ionViewWillEnter() {
    this.username = null;
    this.password = null;
    this.showView = false;

    this.storage.get('account').then((val) => {
      console.log(val);
      if (val) {
        this.navCtrl.push('MainPage');
      } else {
        this.showView = true;
      }
    });
  }

  idiomaChanged(): void {
    console.log(this.idioma);
  }

  // Attempt to login in through our User service
  doLogin() {
    let acc = new Account(this.username, this.password);

    if (this.manterConectado) {
      this.storage.set('account', acc);
    }
    this.navCtrl.push('MainPage');

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
