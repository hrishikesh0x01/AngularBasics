import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/employee.model';

@Pipe({
  name: 'searchFromArrayOn'
})
export class SearchFromArrayOnPipe implements PipeTransform {
  transform(value: Employee[], searchField: string, serachText: string): Employee[] {
    if (serachText?.length) {
      let temp = value?.filter(employee => employee[searchField as keyof Employee].toString().toLowerCase().includes(serachText.trim().toLowerCase()))
      let temp2 = value?.filter(employee => employee[searchField as keyof Employee].toString().toLowerCase().includes("serachText2".trim().toLowerCase()))
      return value?.filter(employee => employee[searchField as keyof Employee].toString().toLowerCase().includes(serachText.trim().toLowerCase()));
    }
    else {
      return value;
    }
  }
}
