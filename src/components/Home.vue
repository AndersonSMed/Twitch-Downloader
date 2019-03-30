<template>
  <v-container>
    <v-layout
      justify-space-around
      wrap
      fill-height
    >
    <v-flex sm12 md5>
      <v-text-field
        label="Your Streamer's name"
        :loading="loading"
      >
        <template v-slot:append-outer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </template>
      </v-text-field>
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      streamer: null
    }),
    computed: {
      loading () {
        return this.$store.getters.loading
      }
    }
  }
</script>

<style>

</style>
