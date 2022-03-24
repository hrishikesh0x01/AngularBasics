import { Pipe, PipeTransform } from '@angular/core';
import { Department } from '../models/department.model';
import { Designation } from '../models/designation.model';

@Pipe({
  name: 'idToName'
})
export class IdToNamePipe implements PipeTransform {

  transform(value: number, map: Department[] | Designation[]): string | undefined {
    return map?.find(x => x.id == value)?.name;
  }

}
