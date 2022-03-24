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
import { filter } from 'rxjs';

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

  private _clearFilters: Subject<number>;
  private _clearFilters$: Observable<number>;

  public get clearFilters$(): Observable<number> {
    return this._clearFilters$;
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

    this._clearFilters = new Subject();
    this._clearFilters$ = this._clearFilters.asObservable();

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

    this.closeFilterOverlay();
    this.filterData(mentorList);
  }

  filterData(mentorList: Mentor[]): void {
    this.filterOverlayComponentRef.instance.applyFilters.subscribe((val: FilterForm) => {
      this._appliedFilters = val;
      this.applyFilters(mentorList);
      this.filterOverlayRef.detach();
    });
  }

  closeFilterOverlay(): void {
    this.filterOverlayRef.backdropClick().subscribe(() => {
      this.filterOverlayRef.detach();
    });

    this.filterOverlayComponentRef.instance.buttonClick.subscribe((val: string) => {
      if (val === 'clear') {
        this._clearFilters.next(0);
      }
      this.filterOverlayRef.detach();
    });
  }

  confirmationPopupRef!: OverlayRef;
  confirmationPopupComponentRef!: ComponentRef<ConfirmationPopupComponent>;

  displayConfirmationPopup(id: number): void {
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

  closeConfirmationPopup(id: number): void {
    this.confirmationPopupRef.backdropClick().subscribe(() => {
      this.confirmationPopupRef.detach();
    });

    this.confirmationPopupComponentRef.instance.buttonClick.subscribe((val) => {
      if (val === 'delete') {
        // this.mentorListPresenter.delete(id);
      }
      this.confirmationPopupRef.detach();
    });
  }

  applyFilters(mentorList: Mentor[]): void {
    if (this._appliedFilters) {

      console.log(this._appliedFilters);
      
      this._appliedFilters.departments.forEach((element, i) => {
        if (element) {
          mentorList = mentorList.filter(mentor => {
            return mentor.dept == i;
          });
        }
      });
  
      this._appliedFilters.designations.forEach((element, i) => {
        if (element) {
          console.log("kkkk", element, i)
          mentorList = mentorList.filter(mentor => {
            console.log("ok", mentor.designation, i, mentor.designation == i);
            return mentor.designation == i;
          });
        }
      });
      console.log("Afterdesg", mentorList);
  
      if (this._appliedFilters.gender != 3) {
        mentorList = mentorList.filter(mentor => {
          return mentor.gender == this._appliedFilters?.gender;
        });
      }
  
      let name = this._appliedFilters.searchBy.name.trim();
      if (name != '') {
        mentorList = mentorList.filter(mentor => {
          return (mentor.fname + mentor.lname).includes(name);
        })
      }
  
      let email = this._appliedFilters.searchBy.email.trim();
      if (email != '') {
        mentorList = mentorList.filter(mentor => {
          return mentor.emailId.includes(email);
        })
      }
  
      let mobile = this._appliedFilters.searchBy.mobile.trim();
      if (mobile != '') {
        mentorList = mentorList.filter(mentor => {
          return mentor.mobile.includes(mobile);
        })
      }
  
      console.log(mentorList);
    }
    this._filteredData.next(mentorList);
    // return mentorList;
  }

  resetFilters(mentorList: Mentor[]) {
    this._appliedFilters = null;
    this.applyFilters(mentorList);
  }
}
