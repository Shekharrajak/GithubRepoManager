import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrgDetailComponent } from './user-org-detail.component';
import { FormsModule } from '@angular/forms';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { GithubService } from '../github.service';
import { HttpModule } from '@angular/http';
import { ReposComponent } from '../repos/repos.component';

describe('UserOrgDetailComponent', () => {
  let component: UserOrgDetailComponent;
  let fixture: ComponentFixture<UserOrgDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOrgDetailComponent, ReposComponent ],
      imports: [FormsModule, RouterTestingModule, HttpModule],
      providers: [GithubService]
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
