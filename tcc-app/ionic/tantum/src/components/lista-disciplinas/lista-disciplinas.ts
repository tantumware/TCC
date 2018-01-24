import { Component } from '@angular/core';

@Component({
  selector: 'lista-disciplinas',
  templateUrl: 'lista-disciplinas.html'
})
export class ListaDisciplinasComponent {

  text: string;

  constructor() {
    console.log('Hello ListaDisciplinasComponent Component');
    this.text = 'Hello World';
  }

}
