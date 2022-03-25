import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable } from '@angular/core';

//////////////////////////////////////////////////////
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs/internal/Observable';
import { ConfirmationPopupComponent } from 'src/app/shared/confirmation-popup/confirmation-popup.component';
import { Button } from 'src/app/shared/models/button.model';
import { Department } from 'src/app/shared/models/department.model';
import { Designation } from 'src/app/shared/models/designation.model';
import { FilterForm } from '../../models/filter-form.model';
import { FilterPresentationComponent } from '../mentor-list-presentation/filter-presentation/filter-presentation.component';
import { Mentor } from 'src/app/shared/models/mentor.model';
import { keyframes } from '@angular/animations';


@Injectable()
export class MentorListPresenterService {
  private _appliedFilters!: FilterForm | null;

  private _delete: Subject<number>;
  private _delete$: Observable<number>;

  public get delete$(): Observable<number> {
    return this._delete$;
  }

  private _filteredData: Subject<Mentor[]>;
  private _filteredData$: Observable<Mentor[]>;

  public get filteredData$(): Observable<Mentor[]> {
    return this._filteredData$;
  }

  private _displayForm: Subject<number>;
  private _displayForm$: Observable<number>;

  public get displayForm$(): Observable<number> {
    return this._displayForm$;
  }

  constructor(private overlay: Overlay) {
    this._delete = new Subject();
    this._delete$ = this._delete.asObservable();

    this._filteredData = new Subject();
    this._filteredData$ = this._filteredData.asObservable();

    this._displayForm = new Subject();
    this._displayForm$ = this._displayForm.asObservable();
  }

  public delete(id: number) {
    this._delete.next(id);
  }

  public displayForm(id?: number) {
    this._displayForm.next(id ?? -1);
  }

  filterOverlayRef!: OverlayRef;
  filterOverlayComponentRef!: ComponentRef<FilterPresentationComponent>;

  displayFilterOverlay(departmentOptions: Department[], designations: Designation[], mentorList: Mentor[]): void {
    let formOverlayConfig: OverlayConfig = {
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().right()
    };

    this.filterOverlayRef = this.overlay.create(formOverlayConfig);

    const formComponent = new ComponentPortal(FilterPresentationComponent);

    this.filterOverlayComponentRef = this.filterOverlayRef.attach(formComponent);

    this.filterOverlayComponentRef.instance.buttons = [
      new Button('Cancel', 'secondary', 'cancel')
    ];

    this.filterOverlayComponentRef.instance.departmentOptions = departmentOptions;
    this.filterOverlayComponentRef.instance.designations = designations;

    this.filterOverlayComponentRef.instance.appliedFilters = this._appliedFilters;

    this.closeFilterOverlay();
    this.filterData(mentorList);
  }

  filterData(mentorList: Mentor[]): void {
    this.filterOverlayComponentRef.instance.applyFilters.subscribe((val: FilterForm) => {
      this._appliedFilters = val;
      this._applyFilters(mentorList);
      this.filterOverlayRef.detach();
    });
  }

  closeFilterOverlay(): void {
    this.filterOverlayRef.backdropClick().subscribe(() => {
      this.filterOverlayRef.detach();
    });

    this.filterOverlayComponentRef.instance.buttonClick.subscribe((val: string) => {
      this.filterOverlayRef.detach();
    });
  }

  confirmationPopupRef!: OverlayRef;
  confirmationPopupComponentRef!: ComponentRef<ConfirmationPopupComponent>;

  displayConfirmationPopup(id?: number): void {
    let formOverlayConfig: OverlayConfig = {
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically()
    };

    this.confirmationPopupRef = this.overlay.create(formOverlayConfig);

    const formComponent = new ComponentPortal(ConfirmationPopupComponent);

    this.confirmationPopupComponentRef = this.confirmationPopupRef.attach(formComponent);

    this.confirmationPopupComponentRef.instance.msg = "Are you sure you want to delete ID: " + id + "?";

    this.confirmationPopupComponentRef.instance.buttons = [
      new Button('Cancel', 'secondary', 'cancel'),
      new Button('Delete', 'danger', 'delete'),
    ]

    this.closeConfirmationPopup(id);
  }

  closeConfirmationPopup(id?: number): void {
    this.confirmationPopupRef.backdropClick().subscribe(() => {
      this.confirmationPopupRef.detach();
    });

    this.confirmationPopupComponentRef.instance.buttonClick.subscribe((val) => {
      if (val === 'delete' && id) {
        this.delete(id);
      }
      this.confirmationPopupRef.detach();
    });
  }

  private _applyFilters(mentorList: Mentor[]): void {
    if (this._appliedFilters) {
      console.log("FullName: ", mentorList[0].fname);
      console.log(this._appliedFilters);

      if (this._appliedFilters.departments?.length) {
        mentorList = mentorList.filter(mentor => {
          return this._appliedFilters!.departments.includes(mentor.dept);
        });
      }

      if (this._appliedFilters.designations?.length) {
        mentorList = mentorList.filter(mentor => {
          return this._appliedFilters!.designations.includes(mentor.designation);
        });
      }

      if (this._appliedFilters.gender != 3) {
        mentorList = mentorList.filter(mentor => {
          return mentor.gender == this._appliedFilters?.gender;
        });
      }

      for (let [key, value] of Object.entries(this._appliedFilters.searchBy)) {
        if (value.trim()) {
          mentorList = mentorList.filter(mentor => {
            console.log("Key: ", key as keyof Mentor)
            console.log("Value: ", mentor[key as keyof Mentor])
            return (<string>mentor[key as keyof Mentor])?.includes(value.trim());
          });
        }
      }

      console.log(mentorList);
    }
    this._filteredData.next(mentorList);
    // return mentorList;
  }

  resetFilters(mentorList: Mentor[]) {
    this._appliedFilters = null;
    this._applyFilters(mentorList);
  }
}
