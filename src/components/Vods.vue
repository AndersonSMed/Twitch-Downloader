<template>
  <v-card>
      <v-container fluid>
        <v-layout row wrap>
            <v-flex xs12 class="text-xs-center">
                <v-card-text class="headline" v-if="streamer">
                    Listing videos for {{streamer.display_name}}
                </v-card-text>
            </v-flex>
            <v-flex xs12 class="text-xs-center" v-for="(vod, index) in videos" :key="index" d-flex>
                <vod-details :vod="vod"></vod-details>
            </v-flex>
        </v-layout>
    </v-container>
    <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="$store.dispatch('selectStreamer', null)">Close</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import VodDetails from '@/components/VodDetails'

  export default {
    components: { VodDetails },
    data: () => ({
    }),
    mounted () {
      if (this.streamer) {
        this.$store.dispatch('loadVideos')
      }
    },
    computed: {
        streamer () {
            return this.$store.getters.streamer
        },
        videos () {
            return this.$store.getters.videos
        },
        loading () {
            return this.$store.getters.loading
        }
    },
    watch: {
        streamer (val, oldval) {
            if (val !== oldval && val) {
                this.$store.dispatch('loadVideos')
            }
        }
    }
  }
</script>

<style>
</style>
