<template>
  <v-app dark>
    <generalNavigationComponent></generalNavigationComponent>
    <v-main class="pb-16">
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>


  export default {
    methods: {
    },
    computed: {
      navigationTypeComponent() {
        if(this.$auth.user.type == 'admin') {
          return 'generalNavigationAdminComponent'
        } else {
          return 'generalNavigationUserComponent'
        }
      }
    }
}

</script>

