import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Api } from '../providers';

@Injectable()
export class UserDataProvider {

  constructor(public http: Http, public api: Api) {
  }

  userData(): any {
    let seq = this.api.get('disciplinas/2018-1', ['username', 'password'], ['user', 'password']).share();

    return seq;
  }

}
