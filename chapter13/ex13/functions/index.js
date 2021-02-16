const functions = require("firebase-functions");
const admin = require('firebase-admin');
const cors = require('cors') ({
  origin: true
});

const webpush = require('web-push')
const serviceAccount = require("./pwa-push-ddac8-firebase-adminsdk-a6cpv-c260fd7698.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://pwa-push-ddac8-default-rtdb.firebaseio.com'
})

exports.storePushData = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    webpush.setVapidDetails(
      key,key,key
    );
    admin
    .database()
    .ref('subscriptions')
    .once('value')
    .then(AllData => {
      AllData.forEach(sub => {
        let pushConfig = {
          endpoint: sub.val().endpoint,
          keys: {
            auth: sub.val().keys.auth,
            p256dh: sub.val().keys.p256dh
          }
        };
        webpush
        .sendNotification(
          pushConfig,
          JSON.stringify({
            pTitle: request.body.pTitle,
            pMsg: request.body.pMsg
          })
        )
        .catch(err => {
          console.log("unregisted user remove", err);
          sub.ref.remove();
        });
      });
      response.status(201).send("complete!")
    })
    .catch(err=> {
      console.log("subscriber information not found", err);
      response.status(500).send({
        error: err.response
      })
    })
  })
})