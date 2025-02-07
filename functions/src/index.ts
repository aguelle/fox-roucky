import * as functions from 'firebase-functions'; // Importation de Firebase Functions
import * as nodemailer from 'nodemailer'; // Importation de Nodemailer

// Configurer le transporteur de mails avec Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail', // Utilisation du service Gmail
  auth: {
    user: 'ton-email@gmail.com', // Ton email
    pass: 'ton-mot-de-passe', // Ton mot de passe ou clé API
  },
});

// Fonction qui s'active lorsqu'un message est ajouté dans Firestore
export const sendEmailOnNewContact = functions.firestore
  .document('messages/{messageId}')  // Écouter les ajouts dans la collection "messages"
  .onCreate((snapshot, context) => {
    const contactData = snapshot.data(); // Récupère les données du message ajouté
    if (!contactData) {
      console.error('Aucune donnée trouvée.');
      return null;
    }

    // Préparer l'email
    const mailOptions = {
      from: 'ton-email@gmail.com',  // Ton email
      to: 'destinataire@example.com',  // Email du destinataire
      subject: `Nouveau message de ${contactData.name}`,  // Sujet
      text: `
        Nom: ${contactData.name}
        Email: ${contactData.email}
        Message: ${contactData.message}
      `,  // Contenu du message
    };

    // Envoyer l'email via Nodemailer
    return transporter.sendMail(mailOptions)
      .then(() => {
        console.log('Email envoyé avec succès');
      })
      .catch((error) => {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
      });
  });
