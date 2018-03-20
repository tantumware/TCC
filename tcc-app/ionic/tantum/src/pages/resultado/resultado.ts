import { StorageKeys } from './../../utils/storage-keys';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-resultado',
  templateUrl: 'resultado.html',
})
export class ResultadoPage {

  private subjects = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    this.storage.get(StorageKeys.CONSTRAINT).then((val) => {
      this.subjects = val;
    });
  }

  getSubjects() {
    return this.subjects;
  }

}
