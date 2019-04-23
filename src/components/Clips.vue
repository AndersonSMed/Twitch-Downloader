<template>
  <v-card>
      <v-container flex class="pt-0">
        <v-layout row wrap justify-center>
            <v-flex xs12 class="text-xs-center">
                <v-card-text class="headline" v-if="streamer">
                    Select a clip to watch
                </v-card-text>
            </v-flex>
            <v-flex xs10>
                <v-slider
                    label="Clips per page"
                    v-model="limit"
                    :disabled="loadingData"
                    :thumb-size="25"
                    thumb-label="always"
                    append-icon="refresh"
                    @click:append="reloadClips()"
                    max="10"
                    min="1"
                >
                </v-slider>
            </v-flex>
            <template v-if="!!clips">
                <template v-if="clips.length">
                    <v-flex xs12 class="text-xs-center" v-for="(clip, index) in clips" :key="index" d-flex>
                        <clip-details :clip="clip"></clip-details>
                    </v-flex>
                </template>
                <v-flex v-else class="text-xs-center">
                    <span class="headline grey--text text--darken-2">Sorry, but there's no clips to show :T</span>
                </v-flex>
            </template>
            <v-flex xs10 v-else-if="loading">
                <v-progress-linear 
                    :indeterminate="true"
                    height="2"
                ></v-progress-linear>
            </v-flex>
        </v-layout>
    </v-container>
    <v-divider></v-divider>
    <v-card-actions>
        <v-btn @click="clearData()" flat>Close</v-btn>
        <v-spacer></v-spacer>
        <v-btn @click="nextPage()" :disabled="!cursor" flat>Next</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import ClipDetails from '@/components/ClipDetails'

  export default {
    components: { ClipDetails },
    data: () => ({
        loadingData: false,
        limit: 2,
        page: 1
    }),
    mounted () {
      if (this.streamer) {
        this.loadClips()
      }
    },
    computed: {
        streamer () {
            return this.$store.getters.streamer
        },
        clips () {
            return this.$store.getters.clips
        },
        loading () {
            return this.$store.getters.loading
        },
        cursor () {
            return this.$store.getters.cursor
        }
    },
    watch: {
        streamer (val, oldval) {
            if (val !== oldval && val) {
                this.loadClips()
            }
        }
    },
    methods: {
        clearData () {
            this.$store.dispatch('clearClips', null)
            this.$store.dispatch('selectStreamer', null)
        },
        loadClips () {
            this.$store.dispatch('loadClips', { limit: this.limit, cursor: null })
        },
        reloadClips () {
            this.$store.dispatch('reloadClips', this.limit)
        },
        nextPage () {
            this.$store.dispatch('loadClips', { limit: this.limit, cursor: this.cursor })
        }
    }
  }
</script>

<style>
</style>
