import { Component } from '@angular/core';

@Component({
  selector: 'capsulas',
  templateUrl: 'capsulas.html'
  // inputs: ['capsulas: string[]', 'capsulasSelecionadas: string[]']
})
export class CapsulasComponent {

  capsulas: string[];

  capsulasSelecionadas: string[];

  constructor() {
  }

}
