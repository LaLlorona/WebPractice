<template>
  <v-app>
    <v-app-bar app color = "red" dark fixed>
      <v-btn icon v-if = "$route.name !== 'home_page'" @click = "$router.go(-1)">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>camera gallery</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon v-if = "$route.name == 'home_page'" @click = "$router.push('/camera')">
        <v-icon>camera_alt</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App'
}
</script>