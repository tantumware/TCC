import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { LoginPage } from './login';
import { Http } from '@angular/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function TranslateLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    TranslateModule.forChild(),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (TranslateLoaderFactory),
        deps: [ Http ]
      }
    })
  ],
  exports: [
    LoginPage
  ]
})
export class LoginPageModule { }
