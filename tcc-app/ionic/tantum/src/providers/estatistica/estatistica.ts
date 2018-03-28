import { Api } from './../api/api';
import { Injectable } from '@angular/core';

@Injectable()
export class EstatisticaProvider {

  constructor(public api: Api) {
  }

  getEstatisticas(): any {
    let seq = this.api.get('statictics', ['username', 'password'], ['user', 'password']).share();

    return seq;
  }

}
