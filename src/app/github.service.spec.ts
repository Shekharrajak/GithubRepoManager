import { TestBed, inject } from '@angular/core/testing';

import { GithubService } from './github.service';
import { HttpModule } from '@angular/http';

describe('GithubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [GithubService]
    });
  });

  it('should be created', inject([GithubService], (service: GithubService) => {
    expect(service).toBeTruthy();
  }));
});
