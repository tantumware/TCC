import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GradeHorariosPage } from './grade-horarios';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    GradeHorariosPage
  ],
  imports: [
    IonicPageModule.forChild(GradeHorariosPage),
    TranslateModule.forChild(),
    ComponentsModule
  ],
})
export class GradeHorariosPageModule {}
