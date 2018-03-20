import { Constraints } from './../../models/constraints';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Api } from '../providers';
import 'rxjs/add/operator/map';

@Injectable()
export class SubjectsProvider {

  constructor(public http: Http, public api: Api) {
  }

  allSubjects(): any {
    let seq = this.api.get('schedule').share();

    return seq;
  }

  nextSubjects(constraints: Constraints): any {
    let seq = this.api.get('next-subjects').share();
    
    return seq;
  }

}
