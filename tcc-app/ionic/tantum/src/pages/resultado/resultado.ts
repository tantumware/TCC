import { Constraints } from './../../models/constraints';
import { StorageKeys } from './../../utils/storage-keys';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SubjectsProvider } from '../../providers/subjects/subjects';
import { Subject } from '../../models/subject';

@IonicPage()
@Component({
  selector: 'page-resultado',
  templateUrl: 'resultado.html',
})
export class ResultadoPage {

  private constraints: Constraints;

  private subjects: Subject[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private storage: Storage,
    private subjectsProvider: SubjectsProvider) {
  }

  ionViewDidLoad() {
    this.storage.get(StorageKeys.CONSTRAINT).then((val) => {
      this.constraints = val;
    });

    
    this.subjectsProvider.calculateSemester(this.constraints)
    .map(res => res.json())
    .subscribe(res => {
      if (res.success) {
        
        this.storage.set(StorageKeys.RESULT, res);
        this.storage.remove(StorageKeys.CONSTRAINT);
      }
    }, err => {
      console.error('ERROR', err);
    }); 
    // se demorar criar um loading
  }

  getSubjects() {
    return this.subjects;
  }

}
