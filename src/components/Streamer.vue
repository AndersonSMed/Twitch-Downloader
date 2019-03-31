<template>
  <v-card flat tile class="d-flex" style="background: transparent">
      <v-container flex>
          <v-layout row wrap justify-center>
              <v-flex xs12>
                <v-card-text class="text-xs-center">
                    {{streamer.display_name}}
                </v-card-text>
              </v-flex>
              <v-flex xs12>
                <v-img
                    :src="streamer.logo"
                    aspect-ratio="1"
                    contain
                >
                </v-img>
              </v-flex>
          </v-layout>
      </v-container>
  </v-card>
</template>

<script>
  export default {
    props: ['streamer'],
    data: () => ({
    })
  }
</script>

<style>

</style>
