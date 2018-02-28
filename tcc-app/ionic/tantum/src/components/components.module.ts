import { NgModule } from '@angular/core';
import { GradeHorarioComponent } from './grade-horario/grade-horario';
import { CapsulaComponent } from './capsula/capsula';
import { ListaDisciplinasComponent } from './lista-disciplinas/lista-disciplinas';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [GradeHorarioComponent,
    CapsulaComponent,
    ListaDisciplinasComponent],
	imports: [IonicModule],
	exports: [GradeHorarioComponent,
    CapsulaComponent,
    ListaDisciplinasComponent]
})
export class ComponentsModule {}
