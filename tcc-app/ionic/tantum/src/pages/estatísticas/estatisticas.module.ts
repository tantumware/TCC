import { ComponentsModule } from './../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstatisticasPage } from './estatisticas';

@NgModule({
  declarations: [
    EstatisticasPage,
  ],
  imports: [
    IonicPageModule.forChild(EstatisticasPage),
    TranslateModule.forChild(),
    ComponentsModule
  ],
})
export class EstatisticasPageModule {}
