<template>
  <v-card class = "mx-auto" max-width = "500">
    <v-img src = "../assets/img/push-image.jpg" height = "200px"></v-img>
    <v-row algin = "center">
      <v-col offset = "1" cols = "2">
        <v-img contain color = "blue darken-2" src = "../assets/img/push-noti.png"
        max-width = "70px"></v-img>
      </v-col>
      <v-col cols = "8">
        <v-card-title primary-title>
          <h1 class = "headline">graduation exhibition push notify</h1>
          <div class = "body-1">
            we are going to send push notification.
            please choose 'allow notification'
          </div>
        </v-card-title>
      </v-col>
    </v-row>
    <v-row align = "center">
      <v-col offset = "1" cols = "5">
        <v-btn block large @click = "fnPushSubscribe" color = "orange" dark>
          <v-icon dark left>add_alert</v-icon>allow
        </v-btn>
      </v-col>
      <v-col cols = "5">
        <v-btn block large @click = "fnUnSubscription" color = "orange" dark>
          <v-icon dark left>notifications_off</v-icon>cancel
        </v-btn>
      </v-col>
    </v-row>
    <v-snackbar v-model = "bMsg">
      <v-btn color = "orange" text @click = "bMsg = false">close</v-btn>
    </v-snackbar>
  </v-card>
</template>

<script>
import {oSubscriptionsinDB} from "@/datasources/firebase"
export default {
  data() {
    return {
      bMsg: false,
    }
  },
  methods: {
    fnPushSubscribe() {
      console.log("push sent")
      let that = this;
      Notification.requestPermission(function(result) {
        if (result != "granted") {
          console.log("push service is not granted")
        }
        else {
          that.fnConfigurePushSub();
        }
      })
    },

    fnConfigurePushSub() {
      let that = this;
      console.log("configuring")
      if (!("serviceWorker" in navigator)) {
        console.log("service worker not found!");
        return;
      }
      navigator.serviceWorker.ready
      .then(function(swreg) {
        return swreg.pushManager.getSubscription();
      })
      .then(function(sub) {
        if (sub == null) {
          that.fnNewSubscription();
          that.fnDisplayNotification();
        }
        else {
          console.log("you're already allowed notification")
        }
      })
    },

    fnNewSubscription() {
      let that = this;
      navigator.serviceWorker.ready
      .then(function(swreg) {
        const vapidPublicKey = 
        "BPfvmTM4F4VVLJTpaasyxNCONY5b83KLXQm0jx268EzSAu2qrgQGuLHfCUDyyssqjhbdukElQqcTO60ScDEN9hQ"
        const convertedVapidPublicKey = that.urlBase64ToUint8Array(vapidPublicKey);
        return swreg.pushManager.subscribe({
          userVisibleOnly : true,
          applicationServerKey: convertedVapidPublicKey,
        })
        .then(function(newSub) {
          const filteredSub = JSON.parse(JSON.stringify(newSub));
          let pushConfig = {
            endpoint: filteredSub.endpoint,
            keys: {
              p256dh: filteredSub.keys.p256dh,
              auth: filteredSub.keys.auth
            }
          };
          return oSubscriptionsinDB.push(pushConfig)
        })
      })
    },
    fnUnSubscription() {
      let that = this;
      navigator.serviceWorker.ready
      .then(function(swreg) {
        return swreg.pushManager.getSubscription();
      })
      .then(function(oldSub) {
        that.bMsg = true;
        oldSub.unsubscribe();
      })
      .catch(err => console.log(err));
    },
    fnDisplayNotification() {
      const title = "graduation exhibition"
      const options = {
        body: "welcome to new notification service!",
        icon: "/img/push-noti.png",
        badge: "/img/push-badge-icon.png",
        image: "/img/push-image.jpg",
        actions: [
          {
            action: "like",
            title: "if you like coffee, click the link",
            icon: "/img/push-coffee.png"

          }
        ],
        vibrate: [500, 100, 500]
      };
      navigator.serviceWorker.ready.then(function(swreg) {
        swreg.showNotification(title, options);
      })

    },
    urlBase64ToUint8Array(base64String) {
      const padding = '='.repeat((4 - base64String.length % 4) % 4)
      const base64 = (base64String + padding)
      /* eslint-disable */
      .replace(/\-/g, '+')
      /* eslint-enable */
      .replace(/_/g, '/')
      const rawData = window.atob(base64)
      return Uint8Array.from([...rawData].map((char) =>
      char.charCodeAt(0)))
    }
  }
}
</script>