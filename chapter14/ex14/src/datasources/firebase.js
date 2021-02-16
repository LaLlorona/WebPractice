import firebase from "firebase/app"
import "firebase/firestore"

firebase.initializeApp({
  projectId: "pwa-sync",
});

export const oPicturesinDB = firebase.firestore();

oPicturesinDB.enablePersistence({
  synchronizeTabs: true
})
.catch(err=> console.log(err));