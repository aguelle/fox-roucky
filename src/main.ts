import { bootstrapApplication } from '@angular/platform-browser';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';  // Si tu veux utiliser l'authentification
import { provideFirestore, getFirestore } from '@angular/fire/firestore';  // Firestore pour stocker les messages
import { environment } from '../environments/environment';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())  // Ajoute Firestore

  ]
});
