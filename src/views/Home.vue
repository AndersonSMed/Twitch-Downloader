<template>
  <v-container grid-list-sm fluid>
    <v-layout
      justify-space-between
      align-center
      row wrap
    >
    <v-flex xs4 sm3>
      <v-slider
        label="Limit"
        v-model="limit"
        :disabled="loading"
        :thumb-size="25"
        thumb-label="always"
        max="100"
        min="1"
      >
      </v-slider>
    </v-flex>
    <v-spacer v-if="!$vuetify.breakpoint.xs"></v-spacer>
    <v-flex xs7 lg5>
      <v-text-field
        label="Streamer"
        :loading="loading"
        v-model="streamer"
      >
        <template v-slot:append-outer>
          <v-btn icon @click="search">
            <v-icon>search</v-icon>
          </v-btn>
        </template>
      </v-text-field>
    </v-flex>
    <v-spacer v-if="!$vuetify.breakpoint.xs"></v-spacer>
    </v-layout>
    <v-layout
      row wrap
      justify-center
    >
      <v-flex xs6 sm3 md3 lg2 v-for="(streamer, index) in streamers" :key="index" d-flex>
          <streamer :streamer="streamer"></streamer>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Streamer from '@/components/Streamer'

  export default {
    components: { Streamer },
    data: () => ({
      streamer: null,
      limit: 25
    }),
    computed: {
      loading () {
        return this.$store.getters.loading
      },
      streamers () {
        return this.$store.getters.streamers
      }
    },
    methods: {
      search () {
        this.$store.dispatch('getStreamers', {query: encodeURIComponent(this.streamer), limit: this.limit})
      }
    }
  }
</script>

<style>

</style>
