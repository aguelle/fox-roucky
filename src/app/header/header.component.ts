import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    imports: [CommonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
