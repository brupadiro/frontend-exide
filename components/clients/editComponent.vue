<template>
  <v-dialog v-model="value" max-width="800" persistent>
    <v-card max-width="800" class="rounded-lg">
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
              <FormsFieldsTextComponent v-model="client.name" label="Nombre"></FormsFieldsTextComponent>
            </v-col>
            <v-col class="col-12">
              <FormsFieldsTextComponent v-model="client.lastname" label="Apellido">
              </FormsFieldsTextComponent>
            </v-col>
            <v-col class="col-12">
              <FormsFieldsTextComponent v-model="client.address" label="Direccion">
              </FormsFieldsTextComponent>
            </v-col>
            <v-col class="col-12">
              <FormsFieldsTextComponent v-model="client.phone" label="Telefono" type="number">
              </FormsFieldsTextComponent>
            </v-col>
            <v-col class="col-12">
              <FormsFieldsTextComponent v-model="client.email" label="Email">
              </FormsFieldsTextComponent>
            </v-col>

          </v-row>
        </v-card-text>
      </v-form>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="updateUser()" class="rounded-lg">Guardar</v-btn>
      </v-card-actions>
    </v-card>
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
        client: this.clientData
      }
    },
    methods: {
      updateUser() {
          this.$axios.put(`/users/${this.client.id}`, this.client)
          setTimeout(() => {
            this.$emit('clientUpdated')
            this.$emit('input', false)
          }, 1500);

      }
    }
  }

</script>

<style>

</style>
