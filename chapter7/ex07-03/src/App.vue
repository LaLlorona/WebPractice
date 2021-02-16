<template>
  <v-app>
    <v-app-bar app color = "primary" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>multi page</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
    </v-app-bar>

    <v-content>
      <v-fade-transition mod = "out-in">
        <router-view></router-view>
      </v-fade-transition>
    </v-content>

    <v-footer color = "secondary" fixed dark>
      <div class = "mx-auto">HMAPS.net</div>
    </v-footer>
  </v-app>
</template>

