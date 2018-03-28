import { Estatistica } from './../../models/estatistica';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EstatisticaProvider {

  private url: string = 'http://localhost:8080/v1/estatisticas?token="0"';

  constructor(public http: Http) {
  }

  getEstatisticas(): Observable<Estatistica> {
    return this.http.get(this.url).map(res => res.json());
  }

}
