<template>
  <v-container>
    <v-content>
      <div class = "text-center display-3 my-4">hello, main page</div>
      <v-row>
        <v-col cols = "12">message1:</v-col>
        <v-col cols = "12">{{sHi}}</v-col>
        <v-col cols = "12">message2:</v-col>
        <v-col cols = "12">
          <v-text-field label = "your message" v-model = "sMessage"></v-text-field> 
        </v-col>
      </v-row>

      <div class = "text-center">
        <v-btn large color = "purple" dark @click = "fnSetMessage">confirm</v-btn>
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
  },
  methods: {
    fnSetMessage() {
      this.$store.commit('fnSetMessage', this.sMessage)
      this.$router.push('/sub');
    }
  }
}
</script>