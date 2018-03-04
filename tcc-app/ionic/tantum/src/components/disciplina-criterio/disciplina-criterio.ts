import { Component } from '@angular/core';

/**
 * Generated class for the DisciplinaCriterioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
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
