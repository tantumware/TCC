import { SubjectActionListComponent } from './subject-action-list/subject-action-list';
import { NgModule } from '@angular/core';
import { GradeHorarioComponent } from './grade-horario/grade-horario';
import { CapsulaComponent } from './capsula/capsula';
import { ListaDisciplinasComponent } from './lista-disciplinas/lista-disciplinas';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [GradeHorarioComponent,
    CapsulaComponent,
    ListaDisciplinasComponent,
    SubjectActionListComponent],
	imports: [IonicModule],
	exports: [GradeHorarioComponent,
    CapsulaComponent,
    ListaDisciplinasComponent,
    SubjectActionListComponent]
})
export class ComponentsModule {}
