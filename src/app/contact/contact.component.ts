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
  contact = {
    name: '',
    email: '',
    message: '',
    confirm: false
  };
  isSubmitting = false;
  messageSent = false;
  messageError = false;

  async onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.isSubmitting = true;
    this.messageSent = false;
    this.messageError = false;

    const response = await this.contactService.sendMessage(this.contact);

    this.isSubmitting = false;
    if (response.success) {
      this.messageSent = true;
      form.resetForm();
    } else {
      this.messageError = true;
      console.error(response.error);
    }
  }
}
