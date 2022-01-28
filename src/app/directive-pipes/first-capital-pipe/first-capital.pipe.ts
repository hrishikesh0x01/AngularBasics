import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstCapital'
})
export class FirstCapitalPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return (value[0].toUpperCase() + value.substring(1));
  }

}
