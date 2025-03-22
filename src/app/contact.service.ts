import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private serviceID = 'service_b1s39ed';  // Remplace par ton Service ID
  private templateID = 'template_n61tqj5'; // Remplace par ton Template ID
  private publicKey = 'xY85QbwxJxm_UqETc';   // Remplace par ta Public Key

  constructor() {}

  async sendMessage(contact: { name: string; email: string; message: string; phone: string }) {
    if (!contact.name || !contact.email || !contact.phone || !contact.message) {
      return { success: false, error: 'Tous les champs sont obligatoires.' };
    }

    try {
      // Préparer les paramètres pour EmailJS
      const emailParams = {
        name: contact.name,    // Nom de l'expéditeur
        email: contact.email,  // Email de l'expéditeur
        phone: contact.phone,  // Numéro de téléphone
        message: contact.message,
        time: new Date().toLocaleString(),  // Ajoute l'heure d'envoi
      };
      

      // Envoyer l'email via EmailJS
      await emailjs.send(this.serviceID, this.templateID, emailParams, this.publicKey);

      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }
}
