import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unknownData'
})
export class UnknownDataPipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    if (value === null || value === undefined || value === 0) {
      return '???';
    } else {
      return value.toString();
    }
  }
}
