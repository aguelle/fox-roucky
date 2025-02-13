import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { AboutComponent } from "./about/about.component";
import { HeroComponent } from "./hero/hero.component";
import { ServicesComponent } from "./services/services.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";
import { FbReviewsComponent } from "./fb-reviews/fb-reviews.component";
import { FbPostComponent } from "./fb-post/fb-post.component";

@Component({
    selector: 'app-root',
    imports: [HeaderComponent, AboutComponent, HeroComponent, ServicesComponent, ContactComponent, FooterComponent, FbReviewsComponent, FbPostComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'foxroucky';
}
