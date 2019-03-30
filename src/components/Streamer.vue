<template>
  <v-card flat tile class="d-flex">
      <v-img
        :src="streamer.logo"
        aspect-ratio="1"
      ></v-img>
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
