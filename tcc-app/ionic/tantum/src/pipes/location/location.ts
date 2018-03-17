import { FormatterUtils } from './../../utils/formatter';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'location',
})
export class LocationPipe implements PipeTransform {

  /**
   * Takes a value like "3.0820-2 / CTC-CTC102" and return CTC102
   */
  transform(value: string, ...args) {
    let aux: string = value.toString().split("/")[1].trim();

    return FormatterUtils.formatLocal(aux);
  }
}
