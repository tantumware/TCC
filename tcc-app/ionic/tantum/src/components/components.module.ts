import { NgModule } from '@angular/core';
import { GradeHorarioComponent } from './grade-horario/grade-horario';
import { CapsulaComponent } from './capsula/capsula';
@NgModule({
	declarations: [GradeHorarioComponent,
    CapsulaComponent],
	imports: [],
	exports: [GradeHorarioComponent,
    CapsulaComponent]
})
export class ComponentsModule {}
