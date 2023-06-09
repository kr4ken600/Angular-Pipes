import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas',
})
export class MayusculaPipe implements PipeTransform {
  transform(val: string, enMayusculas: boolean = true): string {
    return enMayusculas ? val.toUpperCase() : val.toLowerCase();
  }
}
