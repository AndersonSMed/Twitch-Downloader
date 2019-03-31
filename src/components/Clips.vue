<template>
  <v-card>
      <v-container fluid>
        <v-layout row wrap>
            <v-flex xs12 class="text-xs-center">
                <v-card-text class="headline" v-if="streamer">
                    Select a Clip from {{streamer.display_name}} to watch
                </v-card-text>
            </v-flex>
            <v-flex xs12 class="text-xs-center" v-for="(clip, index) in clips" :key="index" d-flex>
                <clip-details :clip="clip"></clip-details>
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
  import ClipDetails from '@/components/ClipDetails'

  export default {
    components: { ClipDetails },
    data: () => ({
    }),
    mounted () {
      if (this.streamer) {
        this.$store.dispatch('loadClips')
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
        }
    },
    watch: {
        streamer (val, oldval) {
            if (val !== oldval && val) {
                this.$store.dispatch('loadClips')
            }
        }
    }
  }
</script>

<style>
</style>
