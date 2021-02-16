<template>
  <v-container>
    <v-content>
      {{sHi}}
      <br>
      {{sMessage}}
      <div class = "text-center">
        <v-btn fab large color = "teal" to = "/main">
          <v-icon>mdi-replay</v-icon>
        </v-btn>
      </div>
    </v-content>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      sHi: this.$store.getters.fnGetHi,
      sMessage: this.$store.getters.fnGetMessage
    }
  }
}
</script>