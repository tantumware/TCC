import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'capsula',
  templateUrl: 'capsula.html'
})
export class CapsulaComponent {

  @Input() periodos: string[] = [];

  @Output() periodoSelected = new EventEmitter<string[]>();

  allPeriodosSelected: string[] = [];

  constructor() {
  }

  getClass(periodo: string): string {
    return this.allPeriodosSelected.indexOf(periodo) > -1 ? 'capsule-ative' : 'capsule-inative';
  }

  onItemClicked(periodo: string) {
    if (this.allPeriodosSelected.indexOf(periodo) > -1){
      this.allPeriodosSelected.splice(this.allPeriodosSelected.indexOf(periodo), 1)
    } else {
      this.allPeriodosSelected.push(periodo);
    }
    this.periodoSelected.emit(this.allPeriodosSelected);
  }

}
