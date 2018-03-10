import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResultadoPage } from './resultado';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ResultadoPage
  ],
  imports: [
    IonicPageModule.forChild(ResultadoPage),
    ComponentsModule
  ],
})
export class ResultadoPageModule {}
