import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedReposComponent } from './saved-repos.component';

describe('SavedReposComponent', () => {
  let component: SavedReposComponent;
  let fixture: ComponentFixture<SavedReposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedReposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
