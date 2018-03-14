import { FormatterUtils } from './../../utils/formatter';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'schedule',
})
export class SchedulePipe implements PipeTransform {

  /**
   * Takes a value like "3.0820-2 / CTC-CTC102" and return 08:20
   */
  transform(value: string, ...args) {
    let aux: string = value.split("/")[0].trim();

    return FormatterUtils.formatHour(aux);
  }
}
