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
  contact = {
    name: '',
    email: '',
    message: '',
    confirm: false
  };
  isSubmitting = false;
  messageSent = false;
  messageError = false;

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.isSubmitting = true;
    // Simuler l'envoi du message
    setTimeout(() => {
      this.isSubmitting = false;
      this.messageSent = true;
      form.resetForm(); // Réinitialiser le formulaire après soumission réussie
    }, 2000); // Temps simulé d'envoi
  }
}