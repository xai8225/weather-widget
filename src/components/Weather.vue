<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
      <v-col>
        <v-text-field
          v-model="message"
          append-outer-icon="fa-paper-plane"
          filled
          clear-icon="fa-trash"
          clearable
          label="Message"
          type="text"
          @click:append-outer="sendMessage"
          @click:clear="clearMessage"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    message: "london",
  }),

  methods: {
    toggleMarker() {
      this.marker = !this.marker;
    },
    sendMessage() {
      console.log('sss');
      this.$router.push({ name: 'weather'})
    },
    clearMessage() {
      this.message = "";
    },
    resetIcon() {
      this.iconIndex = 0;
    },
    changeIcon() {
      this.iconIndex === this.icons.length - 1
        ? (this.iconIndex = 0)
        : this.iconIndex++;
    },
  },
};
</script>
