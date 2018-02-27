import { GradeHorarioComponent } from './../../components/grade-horario/grade-horario';
import { ListaDisciplinasComponent } from './../../components/lista-disciplinas/lista-disciplinas';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GradeHorariosPage } from './grade-horarios';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    GradeHorariosPage,
    ListaDisciplinasComponent,
    GradeHorarioComponent
  ],
  imports: [
    IonicPageModule.forChild(GradeHorariosPage),
    TranslateModule.forChild()
  ],
})
export class GradeHorariosPageModule {}
