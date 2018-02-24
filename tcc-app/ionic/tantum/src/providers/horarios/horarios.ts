import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Api } from '../providers';
import 'rxjs/add/operator/map';

/*
  Generated class for the HorariosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HorariosProvider {

  constructor(public http: Http, public api: Api) {
  }

  gradeDeHorarios(): any {
    let seq = this.api.get('disciplinas/2018-1', ['username', 'password'], ['user', 'password']).share();

    return seq;
  }

}
