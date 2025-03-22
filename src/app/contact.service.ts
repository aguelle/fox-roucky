import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private firestore: Firestore) {}

  async sendMessage(contact: { name: string; email: string; message: string }): Promise<{ success: boolean; id?: string; error?: string }> {
    if (!contact.name || !contact.email || !contact.message) {
      return { success: false, error: 'Tous les champs sont obligatoires.' };
    }
    try {
      const messagesRef = collection(this.firestore, 'messages');
      const docRef = await addDoc(messagesRef, contact);
      return { success: true, id: docRef.id };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }
}
