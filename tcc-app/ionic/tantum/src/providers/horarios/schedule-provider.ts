import { Injectable } from '@angular/core';
import { Api } from '../providers';

@Injectable()
export class ScheduleProvider {

  constructor(public api: Api) {
  }

  schedule(semester: string): any {
    let seq = this.api.get('schedule/' + semester, ['username', 'password'], ['user', 'password']).share();

    return seq;
  }

}
