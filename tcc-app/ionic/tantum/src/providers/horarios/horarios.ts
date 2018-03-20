import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Api } from '../providers';
import 'rxjs/add/operator/map';

@Injectable()
export class HorariosProvider {

  constructor(public http: Http, public api: Api) {
  }

  gradeDeHorarios(): any {
    let seq = this.api.get('schedule/2018-1', ['username', 'password'], ['user', 'password']).share();

    return seq;
  }

}
