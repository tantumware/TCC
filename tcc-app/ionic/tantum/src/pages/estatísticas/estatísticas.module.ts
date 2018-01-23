import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstatísticasPage } from './estatísticas';

@NgModule({
  declarations: [
    EstatísticasPage,
  ],
  imports: [
    IonicPageModule.forChild(EstatísticasPage),
  ],
})
export class EstatísticasPageModule {}
