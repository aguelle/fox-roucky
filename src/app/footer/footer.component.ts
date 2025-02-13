import { Component } from '@angular/core';
import { FbReviewsComponent } from "../fb-reviews/fb-reviews.component";

@Component({
    selector: 'app-footer',
    imports: [FbReviewsComponent],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
