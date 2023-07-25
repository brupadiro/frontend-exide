<template>
  <generalCardComponent elevation="6">
    <slot></slot>
    <v-card-text>
      <v-data-table loading-text="Buscando clientes..." :headers="headers" :items="items" hide-default-footer>
        <template v-slot:item.firstname="{ item }">
          {{ item.firstname  }} {{ item.lastname  }}
        </template>
        <template v-slot:item.createdAt="{ item }">
          {{ item.createdAt | formatDate  }}
        </template>

      </v-data-table>
    </v-card-text>
    <v-divider></v-divider>
  </generalCardComponent>

</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        headers: [{
          text: 'Nombre',
          value: 'name'
        }, {
          text: 'Apellido',
          value: 'lastname'
        }, {
          text: 'Direccion',
          value: 'address'
        }, {
          text: 'phone',
          value: 'phone'
        }, {
          text: 'Email',
          value: 'email'
        }],
      }
    }
  }

</script>

<style>

</style>
