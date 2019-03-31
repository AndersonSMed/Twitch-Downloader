<template>
  <v-container>
      
  </v-container>
</template>

<script>
  export default {
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
