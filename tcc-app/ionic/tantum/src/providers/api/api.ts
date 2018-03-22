import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams, Headers } from '@angular/http';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
  url: string = 'http://192.168.0.3:8080/v1';

  constructor(public http: Http) {
  }

  get(endpoint: string, params?: any, vals?: any, options?: RequestOptions) {
    if (!options) {
      // let headers = new Headers();
      // headers.append('Access-Control-Allow-Origin','*');
      options = new RequestOptions();
    }


    // Support easy query params for GET requests
    if (params) {
      let p = new URLSearchParams();
      for (let k in params) {
        p.set(params[k], vals[k]);
      }
      // Set the search field if we have params and don't already have
      // a search field set in options.
      options.search = !options.search && p || options.search;
    }

    return this.http.get(this.url + '/' + endpoint, options);
  }

  post(endpoint: string, body: any, options?: RequestOptions) {
    let h: Headers = new Headers();
    h.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    body = {
      'Action': 'Login',
      'UserName': 'bla',
      'Password': 'blabla'
  };
    return this.http.post(this.url + '/' + endpoint, JSON.parse(body), { headers: h });
  }

  put(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.put(this.url + '/' + endpoint, body, options);
  }

  delete(endpoint: string, options?: RequestOptions) {
    return this.http.delete(this.url + '/' + endpoint, options);
  }

  patch(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.put(this.url + '/' + endpoint, body, options);
  }
}
