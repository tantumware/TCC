import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Api } from '../api/api';

@Injectable()
export class LoginProvider {
  _user: any;

  constructor(public http: Http, public api: Api, private storage: Storage) {
  }

  /**
   * Send a GET request to our login endpoint with the data
   * the user entered on the form.
   */
  login(accountInfo: any) {
    console.log(accountInfo);
    let seq = this.api.get('login', ['username', 'password'], [accountInfo.username, accountInfo.password]).share();

    seq
      .map(res => res.json())
      .subscribe(res => {

        if (res.success) {
          this.loggedIn(res);
        }

        if (res.status == 'success') {
        } else {
        }
      }, err => {
        console.error('ERROR', err);
      });

    return seq;
  }

  /**
   * Log the user out, which forgets the session
   */
  logout() {
    this._user = null;
  }

  /**
   * Process a login/signup response to store user data
   */
  loggedIn(resp) {
    this._user = resp.user;
  }
}
