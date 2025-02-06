import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  private contactService = inject(ContactService);

  contact = { name: '', email: '', message: '' };
  messageSent = false;
  errorMessage = '';

  async onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      try {
        await this.contactService.sendMessage(this.contact);
        this.messageSent = true;
        contactForm.reset();
        setTimeout(() => this.messageSent = false, 3000);
      } catch (error) {
        console.error('Erreur lors de l’envoi du message :', error);
        this.errorMessage = "Erreur d'envoi. Veuillez réessayer.";
      }
    }
  }
}
