import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DefinirCriteriosPage } from './definir-criterios';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DefinirCriteriosPage,
  ],
  imports: [
    IonicPageModule.forChild(DefinirCriteriosPage),
    ComponentsModule
  ],
})
export class DefinirCriteriosPageModule {}
