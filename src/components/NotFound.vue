<template>
  <v-container>
    <div class="text-h4 text-center">
      Type city name and press enter or click search button
    </div>
    <v-card
        class="mx-auto my-12 search-card"
        max-width="374"
        outlined
        shaped
    >
      <v-text-field
          v-model="message"
          filled
          hide-details="auto"
          clear-icon="fa-trash"
          clearable
          label="City"
          type="text"
          @keyup.enter="searchWeather"
          @click:clear="clearMessage"
      ></v-text-field>
    </v-card>
    <div class="text-center">
      <v-btn
          tile
          color="success"
          @click="searchWeather"
      >
        <v-icon left>
          fa-paper-plane
        </v-icon>
        Search
      </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Home",

  data: () => ({
    message: "London",
  }),

  methods: {
    searchWeather() {
      this.$router.push(`/weather/${this.message}`)
    },
    clearMessage() {
      this.message = "";
    },
  },
};
</script>

<style scoped lang="scss">
.search-card {
  overflow: hidden;
}
</style>