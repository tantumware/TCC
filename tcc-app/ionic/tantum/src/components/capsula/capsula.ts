import { Component, Input, Output, EventEmitter } from '@angular/core';

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

  @Output() periodoSelected = new EventEmitter<string>();

  allPeriodosSelected: string[];

  constructor() {
  }

  onItemClicked(periodo: string) {
    if (this.allPeriodosSelected.indexOf(periodo) > -1){
      this.allPeriodosSelected.push(periodo);
    }
    this.periodoSelected.emit(periodo);
  }

}
