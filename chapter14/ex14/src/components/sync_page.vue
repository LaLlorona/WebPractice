<template>
  <v-container>
    <v-row>
      <v-col offset = "2" cols = "8" class = "text-center mt-2">
        <form @submit.prevent = "fnSubmitPost()">
          <v-card>
            <v-img height = "200px" :src = "sPicUrl"></v-img>
          </v-card>
          <v-text-field v-model = "sTitle" autofocus label = "picture name"></v-text-field>
          <v-btn color = "primary" dark type = "submit">
            <v-icon left>file_upload</v-icon>upload
          </v-btn>
        </form>
      </v-col>
      <v-col cols = "2" class = "text-center mt-2" ></v-col>

      <v-col
      class = "mt-5"
      cols = "12"
      sm = "6"
      md = "4"
      lg = "3"
      xl = "2"
      v-for = "item in this.oPictures"
      :key = "item.key"
      >
      <v-card class = "py-2 px-2">
        <v-img :src = "item.url" height = "200px">
          <v-container>
            <v-row>
              <v-col cols = "12" class = "text-center">
                <span class = "title grey white--text">{{item.title}}</span>
              </v-col>
            </v-row>
          </v-container>
        </v-img>
        <v-card-actions>
          <v-spacer>
            <v-btn icon @click = "fnDelPost(item)">
              <v-icon>delete</v-icon>
            </v-btn>
          </v-spacer>
        </v-card-actions>
      </v-card>
      </v-col>
      <v-col cols = "12" class = "mt-5 text-center">
        <p v-if = "!oPictures.length">no pictures. please Add!</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import oPictureData from "@/datasources/picture-data"
import {oPicturesinDB} from "@/datasources/firebase"
export default {
  name: "sync_page",
  data() {
    return {
      aPicsData: oPictureData.aPictures,
      oPictures: [],
      sTitle: "",
      sPicUrl: ""
    }
  },
  firestore() {
    return {
      
      oPictures: oPicturesinDB.collection("pictures").orderBy("newdate")

    }
  },
  created() {
    this.fnPreparePost();
  },
  methods: {
    fnPreparePost() {
      console.log(this.oPictures)
      let nIndex = Math.floor(Math.random() * 12)
      const itemPic = this.aPicsData[nIndex];
      this.sTitle = itemPic.sTitle
      this.sPicUrl = itemPic.url
    },

    fnSubmitPost() {
      const dtDate = new Date();

      oPicturesinDB.collection("pictures").add({
        newdate: dtDate,
        title: this.sTitle,
        url: this.sPicUrl
      });
      this.fnPreparePost();
    },

    fnDelPost(item) {
      oPicturesinDB.collection("pictures").doc(item.id).delete();
    }
  }
}
</script>