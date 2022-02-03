import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsTableViewComponent } from './posts-table-view.component';

describe('PostsTableViewComponent', () => {
  let component: PostsTableViewComponent;
  let fixture: ComponentFixture<PostsTableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsTableViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
