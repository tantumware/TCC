import { Component, Input } from '@angular/core';

/**
 * Generated class for the CapsulaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'capsula',
  templateUrl: 'capsula.html'
})
export class CapsulaComponent {

  @Input() periodos: string[];

  constructor() {
    this.periodos = ['teste', 'teste2'];
  }

  onItemClicked(periodo: string) {
    console.log(periodo);
  }

}
