import { Pipe, PipeTransform } from '@angular/core';
import { Mentor } from '../models/mentor.model';

const ENTRIES_PER_PAGE = 5;

@Pipe({
  name: 'pagination'
})

export class PaginationPipe implements PipeTransform {
  transform(value: Mentor[], currentPage: number): Mentor[] {
    return value.slice(currentPage * ENTRIES_PER_PAGE, (currentPage + 1) * ENTRIES_PER_PAGE);
  }
}
