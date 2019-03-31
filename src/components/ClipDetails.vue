<template>
  <v-card tile class="d-flex" style="background: transparent">
    <v-container flex>
        <v-layout row wrap justify-start>
            <v-flex xs6>
                <v-card-text class="text-xs-center">
                    {{clip.title}}
                </v-card-text>
                <v-img
                    :src="clip.thumbnails.medium"
                    :lazy-src="clip.thumbnails.tiny"
                    aspect-ratio="1.9"
                    contain
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
                <v-card-text class="text-xs-center">
                    Game: {{clip.game}}
                </v-card-text>
            </v-flex>
            <v-flex xs6>
                <v-card-text class="text-xs-center">
                    Links for Download:
                </v-card-text>
            </v-flex>
        </v-layout>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    props: ['clip'],
    data: () => ({
    })
  }
</script>

<style>

</style>
