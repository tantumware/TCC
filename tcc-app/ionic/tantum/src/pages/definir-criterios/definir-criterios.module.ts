import { CapsulaComponent } from './../../components/capsula/capsula';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DefinirCriteriosPage } from './definir-criterios';

@NgModule({
  declarations: [
    DefinirCriteriosPage,
    CapsulaComponent
  ],
  imports: [
    IonicPageModule.forChild(DefinirCriteriosPage),
  ],
})
export class DefinirCriteriosPageModule {}
