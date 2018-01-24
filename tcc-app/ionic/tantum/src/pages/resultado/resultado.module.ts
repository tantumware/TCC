import { ListaDisciplinasComponent } from './../../components/lista-disciplinas/lista-disciplinas';
import { GradeHorarioComponent } from './../../components/grade-horario/grade-horario';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResultadoPage } from './resultado';

@NgModule({
  declarations: [
    ResultadoPage,
    GradeHorarioComponent,
    ListaDisciplinasComponent
  ],
  imports: [
    IonicPageModule.forChild(ResultadoPage),
  ],
})
export class ResultadoPageModule {}
