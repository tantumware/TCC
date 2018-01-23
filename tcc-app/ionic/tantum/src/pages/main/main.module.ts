import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainPage } from './main';
import { GradeHorarioComponent } from '../../components/grade-horario/grade-horario';

@NgModule({
  declarations: [
    MainPage,
    GradeHorarioComponent
  ],
  imports: [
    IonicPageModule.forChild(MainPage),
  ],
})
export class MainPageModule {}
