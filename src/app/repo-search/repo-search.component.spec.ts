import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoSearchComponent } from './repo-search.component';
import { FormsModule } from '@angular/forms';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { GithubService } from '../github.service';
import { HttpModule } from '@angular/http';


describe('RepoSearchComponent', () => {
  let component: RepoSearchComponent;
  let fixture: ComponentFixture<RepoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoSearchComponent ],
      imports: [FormsModule, RouterTestingModule, HttpModule],
      providers: [GithubService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
