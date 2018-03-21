import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Api } from '../providers';
import 'rxjs/add/operator/map';

@Injectable()
export class ScheduleProvider {

  constructor(public http: Http, public api: Api) {
  }

  schedule(semester: string): any {
    let seq = this.api.get('schedule/' + semester, ['username', 'password'], ['user', 'password']).share();

    return seq;
  }

}
