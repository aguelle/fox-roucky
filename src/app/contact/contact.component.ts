import { Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  private contactService = inject(ContactService);

  contact = {
    name: '',
    email: '',
    phone: '',
    message: '',
    confirm: false
  };

  isSubmitting = false;
  messageSent = false;
  messageError = false;

  async onSubmit(contactForm: any) {
    if (contactForm.invalid) return;

    this.isSubmitting = true;
    this.messageSent = false;
    this.messageError = false;

    const response = await this.contactService.sendMessage(this.contact);

    if (response.success) {
      this.messageSent = true;
      contactForm.resetForm();
      this.contact = { name: '', email: '', phone: '', message: '', confirm: false };
    } else {
      console.error("Erreur lors de l'envoi :", response.error);
      this.messageError = true;
    }

    this.isSubmitting = false;
  }
}
