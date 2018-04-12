import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResultadoPage } from './resultado';
import { ComponentsModule } from '../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ResultadoPage
  ],
  imports: [
    IonicPageModule.forChild(ResultadoPage),
    TranslateModule.forChild(),
    ComponentsModule
  ],
})
export class ResultadoPageModule {}
