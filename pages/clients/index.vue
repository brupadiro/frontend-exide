<template>
  <v-container>
    <HeadersGeneralComponent>
      <template v-slot:title>
        Clientes
      </template>
      <template v-slot:subtitle>
        <v-btn color="secondary" class="rounded-lg font-weight-bold" @click="modalCreateClient = true">
          Agregar cliente<v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
    </HeadersGeneralComponent>


    <v-row>
      <v-col class="col-12">
        <generalCardComponent elevation="6">
          <GeneralCardTitleComponent class="primary">
            <v-row>
              <v-col class="col-12 white--text">
                Buscar
              </v-col>
              <v-col class="col-12">
                <v-divider></v-divider>
              </v-col>

              <v-col class="col-12 col-md-5">
                <FormsFieldsTextComponent label="Nombre" v-model="search.name" label-color="white--text"></FormsFieldsTextComponent>
              </v-col>
              <v-col class="col-12 col-md-5">
                <FormsFieldsTextComponent label="Email" v-model=search.email label-color="white--text"></FormsFieldsTextComponent>
              </v-col>
              <v-col class="col-12 col-md-2">
                <v-btn block color="secondary" class="mt-8 rounded-lg" @click="getClients" height="44">
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </GeneralCardTitleComponent>
          <v-card-text>
            <v-data-table class='row-height-50'  :headers="headers" :items="clients" hide-default-footer>
              <template v-slot:item.actions="{ item }">
                <v-btn-toggle background-color="secondary" class="rounded-lg mt-3 elevation-4">
                  <v-btn height="44" icon @click="editClient(item)">
                    <v-icon small class="mr-2" color="white">mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn icon height="44" @click="showClient(item)">
                    <v-icon small color="white">mdi-magnify</v-icon>
                  </v-btn>
                  <v-btn icon height="44" @click="deleteClient(item)">
                    <v-icon small color="white">mdi-delete</v-icon>
                  </v-btn>
                </v-btn-toggle>
              </template>
            </v-data-table>
          </v-card-text>
          <v-divider></v-divider>
        </generalCardComponent>

      </v-col>
    </v-row>
    <clientsCreateComponent @clientCreated="getClients()" v-model="modalCreateClient"></clientsCreateComponent>
    <clientsShowComponent v-if="modalShowClient"  :clientData="client" v-model="modalShowClient"></clientsShowComponent>
    <clientsEditComponent @clientUpdated="getClients()" v-if="modalUpdateClient" :clientData="client" v-model="modalUpdateClient"></clientsEditComponent>
  </v-container>
</template>

<script>
  import qs from 'qs'
  import dateFunctions from '~/plugins/mixins/dateFunctions';
  export default {
    mixins: [dateFunctions],
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
        }, {
          text: 'Acciones',
          value: 'actions'
        }],
        clients: [],
        client:{},
        modalCreateClient: false,
        modalUpdateClient:false,
        modalShowClient: false,
        search:{}
      }
    },
    created() {
      this.getClients()
    },
    methods: {
      async getClients() {
        this.loading = true
        await this.$axios.get('/users',{
          params:{
            filters:{
              type:'client',
              name:{
                $contains:this.search.name
              },
              email:{
                $contains:this.search.email
              }
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
        this.loading = false
      },
      deleteClient(item) {
        this.$axios.delete('/users/' + item.id).then((response) => {
          this.getClients()
        })
      },
      editClient(item) {
        this.modalUpdateClient = true
        this.client = item
      },
      showClient(item) {
        this.modalShowClient = true
        this.client = item
      },


    },
    watch: {}
  }

</script>

<style lang="scss">
body .v-application td {
  padding-top: 16px !important;
  padding-bottom: 16px !important;
}

</style>
