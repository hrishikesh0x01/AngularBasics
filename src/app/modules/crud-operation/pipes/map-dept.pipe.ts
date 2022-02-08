import { Pipe, PipeTransform } from '@angular/core';
import { Department } from '../models/department.model';

@Pipe({
  name: 'mapDept'
})
export class MapDeptPipe implements PipeTransform {

  transform(value: number, departments: Department[]): string | undefined {
    return departments?.find(x => x.id == value)?.name;
  }
}