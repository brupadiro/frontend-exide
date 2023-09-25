<template>
  <v-container fluid>
    <HeadersGeneralComponent>
      <template v-slot:title>
        Location
      </template>
    </HeadersGeneralComponent>
    <v-row>
      <v-col class="col-12">
        <promotionsListComponent :items="items.data">
          <v-toolbar color="primary" dense elevation="0">
            <v-toolbar-title class="white--text font-weight-bold">Ultimas Promociones</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
        </promotionsListComponent>
      </v-col>
      <v-col class="col-12">
        <clientsListComponent :items="clients">
          <v-toolbar color="primary" dense elevation="0">
            <v-toolbar-title class="white--text font-weight-bold">Ultimos clientes</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
        </clientsListComponent>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
  import qs from 'qs'
  export default {
    data() {
      return {
        modalShop: false,
        items:{},
        clients:[]
      }
    },
    created() {
      this.$router.push('/analysis')
      this.getPromotions()
      this.getClients()
    },
    methods: {
      getPromotions() {
        this.items = {}
        this.$axios.get('/promotions/?pagination[pageSize]=10',).then((response) => {
          this.items = response.data
        })
      },
      getClients() {
        this.clients = []
        this.$axios.get('/users/',{
          params:{
            filters:{
              type:'client',
            }
          },
          paramsSerializer: params => {
        return qs.stringify(params, {
          arrayFormat: 'brackets'
        })
      }

        }).then((response) => {
          this.clients = response.data
        })
      }
    }
  }

</script>
