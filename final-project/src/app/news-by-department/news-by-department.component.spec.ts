import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsByDepartmentComponent } from './news-by-department.component';

describe('NewsByDepartmentComponent', () => {
  let component: NewsByDepartmentComponent;
  let fixture: ComponentFixture<NewsByDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsByDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsByDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
