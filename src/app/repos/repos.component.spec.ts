import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposComponent } from './repos.component';
import { FormsModule } from '@angular/forms';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { GithubService } from '../github.service';
import { HttpModule } from '@angular/http';


describe('ReposComponent', () => {
  let component: ReposComponent;
  let fixture: ComponentFixture<ReposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReposComponent ],
      imports: [FormsModule, RouterTestingModule, HttpModule],
      providers: [GithubService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
