<template>
  <v-card class="rounded-lg">
    <v-img  height="180" :src="property.image">
      <div class="property-title">
        <span class="secondary white--text text-h6 pa-3 font-weight-extra-bold rounded-br-xl text-capitalize">{{ property.name }}</span>
      </div>
    </v-img>
  </v-card>
</template>

<script>
export default {
  props:{
    property: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>