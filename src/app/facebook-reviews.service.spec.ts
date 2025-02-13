import { TestBed } from '@angular/core/testing';

import { FacebookReviewsService } from './facebook-reviews.service';

describe('FacebookReviewsService', () => {
  let service: FacebookReviewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacebookReviewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
