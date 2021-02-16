import firebase from 'firebase/app'

import 'firebase/firebase-database';
import 'firebase/storage'

const oFirebase = firebase.initializeApp({
  databaseURL: "https://pwa-camera-c4791-default-rtdb.firebaseio.com",
  storageBucket: "pwa-camera-c4791.appspot.com",
});

const oDB = oFirebase.database();

export const oPicturesinDB = oDB.ref('pictures');

export const oStorage = oFirebase.storage();
