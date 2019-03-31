<template>
  <v-card tile class="d-flex" style="background: transparent">
    <v-container flex>
        <v-layout row wrap justify-start>
            <v-flex xs6>
                <v-card-text class="text-xs-center">
                    {{vod.title}}
                </v-card-text>
                <v-img
                    :src="vod.preview.large"
                    :lazy-src="vod.preview.small"
                    aspect-ratio="1.9"
                    contain
                >
                </v-img>
                <v-card-text class="text-xs-center">
                    Game: {{vod.game}}
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
    props: ['vod'],
    data: () => ({
    })
  }
</script>

<style>

</style>
