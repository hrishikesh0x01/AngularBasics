import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Overlay } from '@angular/cdk/overlay';

//////////////////////////////////////////////////////////////////////
import { Mentor } from 'src/app/shared/models/mentor.model';
import { Department } from 'src/app/shared/models/department.model';
import { MentorListPresenterService } from '../mentor-list-presenter/mentor-list-presenter.service';

@Component({
  viewProviders: [MentorListPresenterService],
  selector: 'app-mentor-list-presentation',
  templateUrl: './mentor-list-presentation.component.html',
  styleUrls: ['./mentor-list-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MentorListPresentationComponent implements OnInit {

  private _searchString: string;
  public set searchString(val: string) {
    this._searchString = val;
  }
  public get searchString(): string {
    return this._searchString;
  }

  @Output() public displayFormEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() public delete: EventEmitter<number> = new EventEmitter<number>();

  private _departmentOptions: Department[];
  @Input() public set departmentOptions(val: Department[] | null) {
    if (val) {
      this._departmentOptions = val;
    }
  }
  public get departmentOptions(): Department[] {
    return this._departmentOptions;
  }

  private _designations: Department[];
  @Input() public set designations(val: Department[] | null) {
    if (val) {
      this._designations = val;
    }
  }
  public get designations(): Department[] {
    return this._designations;
  }

  private _mentorDataOrig!: Mentor[];
  private _mentorData!: Mentor[];
  @Input() public set mentorData(val: Mentor[] | null) {
    if (val) {
      if (!this._mentorDataOrig) this._mentorDataOrig = val;
      this._mentorData = val;
    }
  }
  public get mentorData(): Mentor[] {
    return this._mentorData;
  }

  private _genderOptions!: string[];
  @Input() public set genderOptions(val: string[] | null) {
    if (val) {
      this._genderOptions = val;
    }
  }
  public get genderOptions(): string[] {
    return this._genderOptions;
  }

  constructor(private mentorListPresenter: MentorListPresenterService, private changeDetectorRef: ChangeDetectorRef, private router: Router, private overlay: Overlay) {
    this._departmentOptions = new Array<Department>();
    this._designations = new Array<Department>();
    this._searchString = "";
  }

  ngOnInit(): void {
    this.mentorListPresenter.delete$.subscribe(id => {
      this.delete.emit(id);
    });

    this.mentorListPresenter.filteredData$.subscribe(data => {
      this._mentorData = data;
      this.changeDetectorRef.markForCheck();
    });
  }

  displayFilterOverlay() {
    this.mentorListPresenter.displayFilterOverlay(this.departmentOptions, this.designations, this._mentorDataOrig);
  }

  displayConfirmationPopup(id?: number) {
    this.mentorListPresenter.displayConfirmationPopup(id);
  }

  clearFilters() {
    this.mentorListPresenter.resetFilters(this._mentorDataOrig);
  }

  displayForm(id?: number | undefined) {
    if (id) {
      this.router.navigateByUrl(`/mvp-practice/edit/${id}`);
    } else {
      this.router.navigateByUrl('/mvp-practice/add');
    }
  }

  drop(event: CdkDragDrop<Mentor[]>) {
    moveItemInArray(this.mentorData, event.previousIndex, event.currentIndex);
  }
}
