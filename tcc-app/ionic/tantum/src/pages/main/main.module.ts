import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainPage } from './main';
import { TranslateModule } from '@ngx-translate/core';
import { ListaDisciplinasComponent } from '../../components/lista-disciplinas/lista-disciplinas';

@NgModule({
  declarations: [
    MainPage
  ],
  imports: [
    IonicPageModule.forChild(MainPage),
    TranslateModule.forChild()
  ],
})
export class MainPageModule {}
