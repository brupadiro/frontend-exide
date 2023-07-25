<template>
  <generalCardComponent>
    <slot></slot>
    <v-card-text>
      <v-data-table :items-per-page="-1" :headers="headers" :items="items" hide-default-footer>
        <template v-slot:item.start_date="{ item }">
          {{ item.start_date | formatDate }}
        </template>
        <template v-slot:item.end_date="{ item }">
          {{ item.end_date | formatDate }}
        </template>
        <template v-slot:item.price="{ item }">
          US$ {{ item.price}}
        </template>

        <template v-slot:item.actions="{ item }">
          <v-btn  height="30" color="primary" class="rounded-xl" small :to="`/promotions/update/${item.id}`">
            <v-icon color="white">mdi-pencil</v-icon>
            </v-btn>
        </template>
      </v-data-table>
    </v-card-text>
    <promotionsEditComponent v-if="modalUpdatePromo" :promo="promo" @promotionUpdated="$emit('retrievePromotions')"  v-model="modalUpdatePromo"></promotionsEditComponent>
 </generalCardComponent>

</template>

<script>
  import moment from 'moment'
  export default {
    filters: {
      formatDate(date) {
        return moment(date).format('DD/MM/YYYY')
      }
    },
    props: {
      items: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        modalUpdatePromo:false,
        promo:{},
        headers: [{
            text: 'Nombre',
            value: 'name'
          },
          {
            text: 'Descripción',
            value: 'description'
          },
          {
            text: 'Tipo',
            value: 'type'
          },
          {
            text: 'Valor',
            value: 'price'
          },
          {
            text: 'Fecha de inicio',
            value: 'start_date'
          },
          {
            text: 'Fecha de fin',
            value: 'end_date'
          },
          {
            text: 'Nivel de progreso',
            value: 'progress'
          },

          {
            text: 'Acciones',
            value: 'actions',
            sortable: false
          },
        ]
      }
    },
    methods: {
      updatePromo(item){
        this.promo = item
        this.modalUpdatePromo = true
      }
    }
  }

</script>

<style>

</style>
