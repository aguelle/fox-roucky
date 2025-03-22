const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

// Configuration de l'email
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "aurelien.guelle@gmail.com", // Remplace par ton adresse email
    pass: "motdepasse-app", // Génère un mot de passe pour application dans Gmail
  },
});

exports.sendEmailOnNewMessage = functions.firestore
  .document("messages/{messageId}")
  .onCreate((snap, context) => {
    const data = snap.data();
    const mailOptions = {
      from: "aurelien.guelle@gmail.com",
      to: "cyril.hebert14@gmail.com",
      subject: `Nouveau message de ${data.name}`,
      text: `Nom: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
    };

    return transporter.sendMail(mailOptions)
      .then(() => console.log("Email envoyé avec succès"))
      .catch((error) => console.error("Erreur lors de l'envoi de l'email:", error));
  });
