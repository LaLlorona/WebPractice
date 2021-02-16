import firebase from 'firebase/app'

import 'firebase/firebase-database';

const oFirebase = firebase.initializeApp({
  databaseURL: "https://pwa-push-ddac8-default-rtdb.firebaseio.com",
});

const oDB = oFirebase.database();
export const oSubscriptionsinDB = oDB.ref('subscriptions')