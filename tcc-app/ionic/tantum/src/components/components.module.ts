import { SubjectListComponent } from './subject-list/subject-list';
import { SubjectActionListComponent } from './subject-action-list/subject-action-list';
import { NgModule } from '@angular/core';
import { GradeHorarioComponent } from './grade-horario/grade-horario';
import { CapsulaComponent } from './capsula/capsula';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [GradeHorarioComponent,
    CapsulaComponent,
    SubjectListComponent,
    SubjectActionListComponent],
	imports: [IonicModule],
	exports: [GradeHorarioComponent,
    CapsulaComponent,
    SubjectListComponent,
    SubjectActionListComponent]
})
export class ComponentsModule {}
