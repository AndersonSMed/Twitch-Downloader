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
        v-model="streamerQuery"
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
      <v-flex xs6 sm3 md3 lg2 v-for="(live, index) in streamers" :key="index" d-flex>
          <streamer :streamer="live"></streamer>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialogClip" persistent lazy width="600" :fullscreen="$vuetify.breakpoint.xs">
      <clips></clips>
    </v-dialog>
  </v-container>
</template>

<script>
  import Streamer from '@/components/Streamer'
  import Clips from '@/components/Clips'

  export default {
    components: { Streamer, Clips },
    data: () => ({
      streamerQuery: null,
      limit: 25,
      dialogClip: false
    }),
    computed: {
      loading () {
        return this.$store.getters.loading
      },
      streamers () {
        return this.$store.getters.streamers
      },
      streamer () {
        return this.$store.getters.streamer
      }
    },
    watch: {
      streamer (val) {
        this.dialogClip = !!val
      }
    },
    methods: {
      search () {
        this.$store.dispatch('getStreamers', {query: encodeURIComponent(this.streamerQuery), limit: this.limit})
      }
    }
  }
</script>

<style>

</style>
