<template>
  <v-app>
    <v-app-bar app dark fixed color = "primary">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>this is title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-slide-x-transition mode = "out-in">
        <router-view></router-view>
      </v-slide-x-transition>
    </v-content>
    <v-footer color = "secondary" fixed dark>
      <div class = "mx-auto">Copyright	&#169;</div>
    </v-footer>
  </v-app>
</template>
