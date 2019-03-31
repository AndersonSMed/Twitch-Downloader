<template>
  <v-card tile class="d-flex" style="background: transparent">
    <v-container flex class="pa-2">
        <v-layout row wrap justify-start>
            <v-flex xs12>
              <v-card-text class="text-xs-center pt-0 pb-0">
                  {{clip.title}}
              </v-card-text>
              <v-card-text class="text-xs-center pt-0 pb-1">
                  Game: {{clip.game}}
              </v-card-text>
              <v-img
                  :src="clip.thumbnails.medium"
                  :lazy-src="clip.thumbnails.tiny"
                  v-if="!clicked"
                  aspect-ratio="1.9"
                  contain
                  @click="clicked = true"
                  style="cursor: pointer"
              >
                <template v-slot:placeholder>
                  <v-layout
                    fill-height
                    align-center
                    justify-center
                    ma-0
                  >
                    <v-progress-circular indeterminate color="grey"></v-progress-circular>
                  </v-layout>
                </template>
              </v-img>
              <template v-else>
                <iframe :src="clip.embed_url" frameborder="0" width="100%" height="250"></iframe>
              </template>
              <v-card-text class="text-xs-center pa-1">
                  DOWNLOAD:
                <template v-if="data">
                  <a :href="quality.source" v-for="(quality, index) in data.quality_options" :key="index">
                    {{quality.quality}}p
                  </a>
                </template>
              </v-card-text>
            </v-flex>
        </v-layout>
    </v-container>
  </v-card>
</template>

<script>
  import twitchDao from '@/api/twitch'

  export default {
    props: ['clip'],
    data: () => ({
      clicked: false,
      data: null
    }),
    computed: {
      streamer () {
        return this.$store.getters.streamer
      }
    },
    watch: {
      streamer (val) {
        if (!val) {
          this.clicked = false
        }
      }
    },
    mounted () {
      this.loadData()
    },
    methods: {
      loadData () {
        twitchDao.loadClipData(this.clip.slug).then(response => {
          return response.json()
        })
        .then(json => {
          this.data = json
        })
      }
    }
  }
</script>

<style>

</style>
