import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrgDetailComponent } from './user-org-detail.component';

describe('UserOrgDetailComponent', () => {
  let component: UserOrgDetailComponent;
  let fixture: ComponentFixture<UserOrgDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOrgDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOrgDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
