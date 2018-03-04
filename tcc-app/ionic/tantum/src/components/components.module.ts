import { NgModule } from '@angular/core';
import { GradeHorarioComponent } from './grade-horario/grade-horario';
import { CapsulaComponent } from './capsula/capsula';
import { ListaDisciplinasComponent } from './lista-disciplinas/lista-disciplinas';
import { IonicModule } from 'ionic-angular';
import { DisciplinaCriterioComponent } from './disciplina-criterio/disciplina-criterio';
@NgModule({
	declarations: [GradeHorarioComponent,
    CapsulaComponent,
    ListaDisciplinasComponent,
    DisciplinaCriterioComponent],
	imports: [IonicModule],
	exports: [GradeHorarioComponent,
    CapsulaComponent,
    ListaDisciplinasComponent,
    DisciplinaCriterioComponent]
})
export class ComponentsModule {}
