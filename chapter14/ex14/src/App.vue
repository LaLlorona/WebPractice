<template>
  <v-app>
    <v-app-bar app color = "primary" dark>
      <v-toolbar-title>offline sync</v-toolbar-title>
      <v-btn v-if = "bIsOnline" icon>
        <v-icon>wifi</v-icon>
      </v-btn>
      <v-btn v-if = "!bIsOnline" icon>
        <v-icon>signal_wifi_off</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <c-syncpage></c-syncpage>
    </v-content>
  </v-app>
</template>

<script>
import sync_page from "@/components/sync_page"
export default {
  name: "App",
  components: {
    "c-syncpage" : sync_page
  },
 
  data() {
    return {
      bIsOnline : ""
    }
  },
  created() {
    window.addEventListener("online", this.fnIsOnline);
    window.addEventListener("offline", this.fnIsOnline);
    this.fnIsOnline();
  },
  methods: {
    fnIsOnline() {
      if (navigator.onLine) {
        this.bIsOnline = true;
      }
      else {
        this.bIsOnline = false;
      }
    }
  }
}
</script>