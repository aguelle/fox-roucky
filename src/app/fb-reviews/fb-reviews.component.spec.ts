import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbReviewsComponent } from './fb-reviews.component';

describe('FbReviewsComponent', () => {
  let component: FbReviewsComponent;
  let fixture: ComponentFixture<FbReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FbReviewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FbReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
