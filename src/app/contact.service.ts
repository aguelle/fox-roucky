import { Injectable, inject } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private firestore: Firestore = inject(Firestore);

  async sendMessage(contact: { name: string; email: string; message: string }) {
    const messagesRef = collection(this.firestore, 'messages');
    return await addDoc(messagesRef, contact);
  }
}
