import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DefineConstraintsPage } from './define-constraints';
import { ComponentsModule } from '../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    DefineConstraintsPage,
  ],
  imports: [
    IonicPageModule.forChild(DefineConstraintsPage),
    TranslateModule.forChild(),
    ComponentsModule
  ],
})
export class DefineConstraintsPageModule {}
