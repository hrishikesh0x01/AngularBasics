import { ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FilterForm } from 'src/app/mvp-practice/models/filter-form.model';
import { Button } from 'src/app/shared/models/button.model';
import { Department } from 'src/app/shared/models/department.model';
import { Designation } from 'src/app/shared/models/designation.model';
import { FilterPresenterService } from '../filter-presenter/filter-presenter.service';

@Component({
  viewProviders: [FilterPresenterService],
  selector: 'app-filter-presentation',
  templateUrl: './filter-presentation.component.html',
  styleUrls: ['./filter-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterPresentationComponent implements OnInit, DoCheck {
  @Input() appliedFilters!: FilterForm | null;
  @Input() buttons!: Button[];
  @Input() departmentOptions!: Department[];
  @Input() designations!: Designation[];
  @Output() applyFilters: EventEmitter<FilterForm>;
  @Output() buttonClick: EventEmitter<string>;

  filterForm!: FormGroup;

  constructor(private filterPresenterService: FilterPresenterService) {
    this.applyFilters = new EventEmitter();
    this.buttonClick = new EventEmitter();
  }

  ngOnInit(): void {
    this.filterPresenterService.filterForm$.subscribe(data => {
      this.applyFilters.emit(data);
    });
  }

  ngDoCheck(): void {
    if (this.departmentOptions && this.designations && !this.filterForm) {
      this.filterForm = this.filterPresenterService.generateFilterForm(this.appliedFilters);
    }
  }

  onSubmit() {
    this.filterPresenterService.onSubmit(this.filterForm.value);
  }

  onReset() {
    this.filterForm.reset();
  }

  onButtonClick(name: string) {
    this.buttonClick.emit(name);
  }
}
