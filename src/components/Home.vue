<template>
  <v-container grid-list-sm fluid>
    <v-layout
      justify-space-around
      row wrap
    >
    <v-flex xs12 sm5 md5>
      <v-text-field
        label="Your Streamer's name"
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
      streamer: null
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
        this.$store.dispatch('getStreamers', this.streamer)
      }
    }
  }
</script>

<style>

</style>
