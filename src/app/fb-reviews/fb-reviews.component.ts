import { Component, OnInit, Renderer2 } from '@angular/core';
import { FacebookReviewsService } from '../facebook-reviews.service';
import { CommonModule, NgFor } from '@angular/common';

declare var FB: any;

@Component({
  selector: 'app-fb-reviews',
      imports: [NgFor, CommonModule],

  templateUrl: './fb-reviews.component.html',
  styleUrls: ['./fb-reviews.component.scss']
})
export class FbReviewsComponent implements OnInit {
  reviews: any[] = [];

  constructor(private fbService: FacebookReviewsService) {}

  ngOnInit(): void {
    this.fbService.getReviews().subscribe((data) => {
      this.reviews = data.data;
    });
  }
}
