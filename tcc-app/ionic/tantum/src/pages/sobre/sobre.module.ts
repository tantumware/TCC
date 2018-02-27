import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SobrePage } from './sobre';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    SobrePage,
  ],
  imports: [
    IonicPageModule.forChild(SobrePage),
    TranslateModule.forChild()
  ],
})
export class SobrePageModule {}
