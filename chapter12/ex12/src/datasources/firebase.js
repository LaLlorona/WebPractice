import firebase from 'firebase/app';
import 'firebase/auth';

const oFirebase = firebase.initializeApp({
  apiKey: "AIzaSyA_90LuUKdbl5DH-EaNX11iEexsn-cYYH8",
  authDomain: "pwa-login-a248c.firebaseapp.com",
})

export const oFirebaseAuth = oFirebase.auth();