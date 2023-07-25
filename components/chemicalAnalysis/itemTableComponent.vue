<template>
  <v-row no-gutters>
    <v-col class="col-12 border-table">
        <v-checkbox :label="label" class="font-weight-bold black--text"></v-checkbox>
    </v-col>
  </v-row>
</template>

<script>
export default {
    name: 'itemTableComponent',
    props: {
        label: {
            type: String,
            default: 'Label'
        }
    }
}
</script>

<style lang="scss">
.border-table{
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    padding: 0;
    margin: 0;
}
</style>