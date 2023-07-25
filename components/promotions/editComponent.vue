<template>
  <v-dialog v-model="value" max-width="800" persistent fullscreen>
    <v-card max-width="800" class="rounded-lg">
      <v-toolbar color="primary" dense elevation="0">
        <v-toolbar-title class="white--text font-weight-bold">Editar promocion</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="$emit('input', false)">
          <v-icon color="white">mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-form ref="form">
        <v-card-text>
          <v-row>
            <v-col class="col-md-8 col-12">
              <v-row>
                <v-col class="col-12">
                  <FormsFieldsTextComponent v-model="promotion.name" label="Nombre"></FormsFieldsTextComponent>
                </v-col>
                <v-col class="col-12">
                  <FormsFieldsTextareaComponent v-model="promotion.description" label="Descripcion">
                  </FormsFieldsTextareaComponent>
                </v-col>
                <v-col class="col-12">
                  <FormsFieldsTextComponent v-model="promotion.start_date" label="Fecha de inicio" type="date">
                  </FormsFieldsTextComponent>
                </v-col>
                <v-col class="col-12">
                  <FormsFieldsTextComponent v-model="promotion.end_date" label="Fecha de fin" type="date">
                  </FormsFieldsTextComponent>
                </v-col>
                <v-col class="col-12">
                  <FormsFieldsSelectComponent label="Tipo" v-model="promotion.type" :items="['Alquiler','Inversion']">
                  </FormsFieldsSelectComponent>
                </v-col>

                <v-col class="col-12">
                  <v-card>
                    <v-card-text class="pa-2">
                      <label class="font-weight-bold black--text">Nivel de progreso</label>
                      <v-slider thumb-label="always" color="black" height="15" track-size="20"
                        v-model="promotion.progress">
                      </v-slider>

                    </v-card-text>
                  </v-card>
                </v-col>

              </v-row>
            </v-col>
            <v-col class="col-md-4 col-12">
              <v-row>
                <v-col class="col-12">
                  <v-card>
                    <v-card-title>Caracteristicas</v-card-title>
                    <v-card-subtitle>
                      <v-btn-toggle>
                        <v-btn color="primary" small @click="removeFeature()">
                          <v-icon>mdi-minus</v-icon>
                        </v-btn>
                        <v-btn color="primary" small @click="addFeature()">
                          <v-icon>mdi-plus</v-icon>
                        </v-btn>
                      </v-btn-toggle>
                    </v-card-subtitle>
                    <v-card-text>
                      <v-row v-for="(feature,index) in promotion.features" :key="index">
                        <v-col class="col-12">
                          <FormsFieldsTextComponent v-model="feature.name" label="Caracteristicas">
                          </FormsFieldsTextComponent>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>

                </v-col>
                <v-col class="col-12">
                  <FormsFieldsSelectComponent multiple chips :items="clients" item-text="username" item-value="id" v-model="promotion.clients" label="Clientes"></FormsFieldsSelectComponent>
                </v-col>
              </v-row>
            </v-col>

          </v-row>
        </v-card-text>
      </v-form>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="createPromotion()" class="rounded-lg">Guardar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

</template>

<script>
  import moment from 'moment'
  export default {
    props: {
      value: {
        type: Boolean,
        default: false
      },
      promo: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {
        promotion: {},
        clients:[]
      }
    },
    mounted() {
      this.promotion = this.promo
      this.getClients()
    },
    methods: {
      addFeature() {
        this.promotion.features.push({
          name: ''
        })
      },
      removeFeature() {
        this.promotion.features.pop()
      },

      createPromotion() {
        if (this.$refs.form.validate()) {
          this.$axios.put(`/promotions/${this.promo.id}`, {
            data: this.promotion
          })
          this.$emit('promotionUpdated')
          this.$emit('input', false)

        }
      },
      getClients() {
        this.$axios.get('/users?filter[type]=client')
          .then((response)=>{
            this.clients = response.data
          })
      }
    }
  }

</script>

<style>

</style>
