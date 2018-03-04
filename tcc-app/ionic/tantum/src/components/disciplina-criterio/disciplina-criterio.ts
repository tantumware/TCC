import { Component } from '@angular/core';

@Component({
  selector: 'disciplina-criterio',
  templateUrl: 'disciplina-criterio.html'
})
export class DisciplinaCriterioComponent {

  text: string;

  constructor() {
    console.log('Hello DisciplinaCriterioComponent Component');
    this.text = 'Hello World';
  }

}
