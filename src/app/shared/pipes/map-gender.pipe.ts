import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapGender'
})
export class MapGenderPipe implements PipeTransform {

  transform(value: number, options: string[]): unknown {
    return options?.find((x, i) => i == value);
  }
}
