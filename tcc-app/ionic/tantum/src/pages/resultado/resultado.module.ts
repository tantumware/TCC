import { GradeHorarioComponent } from './../../components/grade-horario/grade-horario';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResultadoPage } from './resultado';

@NgModule({
  declarations: [
    ResultadoPage,
    GradeHorarioComponent
  ],
  imports: [
    IonicPageModule.forChild(ResultadoPage),
  ],
})
export class ResultadoPageModule {}
