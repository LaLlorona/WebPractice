<template>
  <v-app>
    <v-app-bar app color = "blue-grey" dark fixed>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>photo gallery</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <v-row>
          <v-col cols = "12" sm = "6" md = "4" lg = "3" xl = "2" v-for = "item in this.aPictures" v-bind:key = item.key>
            <v-card height = "330px">
              <v-img :src = "item.url" height = "200px"></v-img>
              <v-card-title>
                <h1 class = "title grey--text text--darken-3 mb-3">{{item.title}}</h1>
                <p class = "body-2 grey--text">{{item.info}}</p>
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer fixed>
      <div class = "mx-auto">&copy; CODE-DESIGN.web.app</div>
    </v-footer>
  </v-app>
</template>

<script>
import oPictureData from '@/datasources/picture-data'
export default {
  data() {
    return {
      'aPictures' : oPictureData.aPictures
    }
  }
}
</script>