import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DefineConstraintsPage } from './define-constraints';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DefineConstraintsPage,
  ],
  imports: [
    IonicPageModule.forChild(DefineConstraintsPage),
    ComponentsModule
  ],
})
export class DefineConstraintsPageModule {}
