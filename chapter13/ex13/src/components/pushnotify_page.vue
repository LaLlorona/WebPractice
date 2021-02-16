<template>
  <v-container>
    <v-row wrap>
      <v-col cols = "12" class = "text-center">
        <h1 class = "display-1">send message</h1>
      </v-col>
      <v-col class = "my-3" offset = "1" cols = "10">
        <v-card color = "blue-grey lighten-1" dark>
          <v-container class = "my-3">
            <v-row>
              <v-col cols = "12">
                <v-text-field autofocus name = "title" label = "this is title" type = "text"
                v-model = "sTitle" color = "white"></v-text-field>
              </v-col>
              <v-col cols = "12">
                <v-textarea rows="3" name = "message" label = "contents" type = "text"
                v-model = "sMsg" color = "white"></v-textarea>
              </v-col>
            </v-row>
          </v-container>
          <v-card-actions>
            <v-btn block large color = "green" dark @click = "fnSendPush">
              <v-icon left>message</v-icon> send
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      sTitle: '',
      sMsg: ''
    }
  },
  methods: {
    fnSendPush() {
      const PreparedData = JSON.stringify( {
        pTitle: this.sTitle,
        pMsg: this.sMsg
      });
      const firestore_endpoint = "https://us-central1-pwa-push-ddac8.cloudfunctions.net/storePushData"
      fetch(firestore_endpoint, {
        method: "POST",
        headers: {
          'Content-type' : 'application/json'
        },
        body: PreparedData
      }).catch(err => console.log("error!" + err.message))

    }
  }
}
</script>