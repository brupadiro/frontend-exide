<template>
  <v-container fill-height>
    <v-row justify="center" align-content="center">
      <v-col class="col-12 col-md-8 col-lg-6">
        <GeneralCardComponent color="primary">
          <v-card-title class="d-flex justify-center">
            <v-avatar size="200">
              <v-img src="/logo.png" contain></v-img>
            </v-avatar>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-form ref="form">
              <v-row>
                <v-col class="col-12">
                  <FormsFieldsTextComponent v-model="user.username" prepend-inner-icon="ion-ios-document"
                    :rules="[rules.min]" label-color="white--text" label="Usuario" type="email" required>
                  </FormsFieldsTextComponent>
                </v-col>
                <v-col class="col-12">
                  <formsFieldsPasswordComponent v-model="user.password" :rules="rules.required"
                    label-color="white--text" label="Contraseña" required>
                  </formsFieldsPasswordComponent>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn color="yellow" class="black--text rounded-lg font-weight-regular" @click="login()"
              :loading="loading" large block>
              Entrar&nbsp;<v-icon>mdi-login</v-icon>
            </v-btn>
          </v-card-actions>
        </GeneralCardComponent>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
  export default {
    auth: false,

    layout: 'empty',
    data: () => ({
      loading: false,
      rules: {
        required: [value => !!value || 'Required.'],
        min: [v => v.length <= 8 || 'Min 8 characters']
      },
      tab: 0,
      user: {
        username: '',
        password: ''
      },
    }),

    created() {
      this.$auth.logout()
    },
    methods: {
      async login() {
        if (!this.$refs.form.validate()) return
        this.loading = true
        this.$store.dispatch('users/login', this.user)
          .then(() => {
            this.loading = false
            this.$router.push('/')
          }).catch(() => {
            this.loading = false
          })
      }
    }
  }

</script>

<style>

</style>
