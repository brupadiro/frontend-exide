<template>
  <v-dialog v-model="value" max-width="1200" persistent>
    <GeneralCardComponent  class="rounded-lg">
      <v-toolbar color="primary" dense elevation="0">
        <v-toolbar-title class="white--text font-weight-bold">Nuevo cliente</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="$emit('input', false)">
          <v-icon color="white">mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-form ref="form">
        <v-card-text>
          <v-row>
            <v-col class="col-12">
              <generalCardComponent outlined>
                <generalCardTitleComponent>{{ client.name }} {{ client.lastname }}</generalCardTitleComponent>
                <v-divider></v-divider>
                <v-card-text>

                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-center text-subtitle-1 font-weight-regular black--text">
                            Direccion
                          </th>
                          <th  class="text-center text-subtitle-1 font-weight-regular black--text">
                            Telefono
                          </th>
                          <th  class="text-center text-subtitle-1 font-weight-regular black--text">
                            Email
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="text-center">{{ client.address }}</td>
                          <td class="text-center">{{ client.phone }}</td>
                          <td class="text-center">{{ client.email }}</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>

                </v-card-text>
              </generalCardComponent>
            </v-col>
          </v-row>
        </v-card-text>
      </v-form>
      <v-card-subtitle class="primary pa-3">
        <v-tabs :vertical="$vuetify.breakpoint.smAndDown" v-model="tab" hide-slider slider-color="primary"
        background-color="transparent" active-class="active-tab" grow>
        <v-tab ripple :value="1">
          <span class="font-weight-black black--text">INVERSIONES</span>
        </v-tab>
        <v-tab ripple :value="2">
          <span class="font-weight-black black--text">RENTAS</span>
        </v-tab>
      </v-tabs>

      </v-card-subtitle>
      <v-card-text>
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <PromotionsListComponent :items="propertiesForInvertion.data"></PromotionsListComponent>
        </v-tab-item>
        <v-tab-item class="pa-4">
          <PromotionsListComponent :items="propertiesForRent.data"></PromotionsListComponent>

        </v-tab-item>

      </v-tabs-items>
    </v-card-text>

    </GeneralCardComponent>
  </v-dialog>

</template>

<script>
  import moment from 'moment'
  export default {
    props: {
      clientData: {
        type: Object,
        default: () => {
          return {}
        }
      },
      value: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        tab:0,
        client: this.clientData,
        properties:{
          data:[]
        }
      }
    },
    created() {
      this.getProperties()
    },
    methods: {
      getProperties() {
        this.$axios.get(`/promotions/?filters[clients][id][$in]=${this.client.id}`, this.client)
          .then((response)=>{
            this.properties = response.data
          })
      }
    },
    computed:{
      propertiesForInvertion() {
        return {data:this.properties.data.filter((property) => {
          return property.type == 'Inversion'
        })}
      },
      propertiesForRent() {
        return {data:this.properties.data.filter((property) => {
          return property.type == 'Alquiler'
        })}
      },
      }
    }

</script>

<style>
.active-tab span{
  color:white!important;
}
</style>
