<template>
  <v-container>
    <v-card
        :loading="loading"
        class="mx-auto my-12 custom-card"
        max-width="374"
        outlined
        shaped
        :class="{ error: error }"
    >
      <v-img
          :src="require('../assets/weather.jpg')"
          contain
      />
      <template v-if="info">
        <v-card-text>
          <div class="text-h5">
            Weather in {{ cityName }}
          </div>
          <v-divider class="my-1"></v-divider>
          <div class="temperature-section">
            <div class="div">
              <div class="text-h3">
                <v-icon>fa-thermometer</v-icon>
                {{ info.main.temp }}°C
              </div>
              <v-row class="mx-0 my-1">
                Feels like: {{ info.main.feels_like }}°C
              </v-row>
            </div>
            <div>
              <div class="text-h5 my-1">
                Min/max:
              </div>
              <v-row class="mx-0 my-1">
                {{ info.main.temp_min }}°C / {{ info.main.temp_max }}°C
              </v-row>
            </div>
          </div>
          <v-divider class="my-4"></v-divider>
          <div class="d-flex justify-space-between">
            <v-col>
              <div class="text-h6">
                <v-icon>fa-tint</v-icon>
                {{ info.main.humidity }}%
              </div>
            </v-col>
            <v-col>
              <div class="text-h6">
                <v-icon>fa-sort-amount-desc</v-icon>
                {{ info.main.pressure }}
              </div>
            </v-col>
          </div>
        </v-card-text>
      </template>
      <template v-if="error">
        <div class="my-1 mx-1 heading">
          {{ error }}
        </div>
      </template>
    </v-card>
    <div class="text-center">
      <v-btn
          elevation="2"
          @click="$router.push('/')"
      >
        Go for another search
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import getRequestURL from "../api/api";
import axios from "axios";
export default {
  name: "Weather",

  data: () => ({
    info: null,
    loading: true,
    error: null,
  }),

  mounted() {
    this.getWeather();
  },

  computed: {
    cityName: function () {
      return this.$route.params.city.toUpperCase();
    }
  },

  methods: {
    getWeather() {
      axios
          .get(getRequestURL(this.$route.params.city))
          .then(response => {
            this.info = response.data;
            this.loading = false;
            this.error = null;
          }).catch(error => {
        this.loading = false;
        this.error = error.response.data.message;
      });
    }
  },
};
</script>

<style scoped lang="scss">
.custom-card {
  background: linear-gradient(to bottom right, #3cc0fe 20%, #0066ff);
  color: #fff;
}

.temperature-section {
  display: flex;
  justify-content: space-between;
}
</style>
