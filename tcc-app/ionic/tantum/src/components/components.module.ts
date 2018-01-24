import { NgModule } from '@angular/core';
import { GradeHorarioComponent } from './grade-horario/grade-horario';
import { CapsulaComponent } from './capsula/capsula';
import { ListaDisciplinasComponent } from './lista-disciplinas/lista-disciplinas';
@NgModule({
	declarations: [GradeHorarioComponent,
    CapsulaComponent,
    ListaDisciplinasComponent],
	imports: [],
	exports: [GradeHorarioComponent,
    CapsulaComponent,
    ListaDisciplinasComponent]
})
export class ComponentsModule {}
