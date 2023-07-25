<template>
  <v-app dark>
    <v-app-bar app color="primary" height="80" elevation="1">
      <v-toolbar-title class="d-flex justify-center">
        <img height="30" src="/logo-chico.png">
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>
<script>
  export default {
    name: 'empty',
  }

</script>

<style lang="scss">

</style>
