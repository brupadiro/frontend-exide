<template>
    <v-container fluid>
        <generalCardComponent>
            <generalCardTitleComponent>History&nbsp;<small class="text-subtitle-2">New Registration</small>
            </generalCardTitleComponent>
            <v-divider></v-divider>
            <v-card-text>
                <v-form ref="form">

                    <v-row>
                        <v-col class="col-12">
                            <FormsFieldsSelectComponent type="email" multiple chips :items="['Project leader','System adminsitrator','Supervisor','System Calibrador','Plant satelite']" :rules="rules.required" label="mail to" v-model="history.mailTo">
                            </FormsFieldsSelectComponent>
                        </v-col>
                        <v-col class="col-12">
                            <FormsFieldsTextareaComponent  :rules="rules.required" label="Description" v-model="history.Description">
                            </FormsFieldsTextareaComponent>
                        </v-col>
                        <v-col class="col-12">
                            <FormsFieldsTextareaComponent  :rules="rules.required" label="Details" v-model="history.Details">
                            </FormsFieldsTextareaComponent>
                        </v-col>
                        <v-col class="col-12">
                            <FormsFieldsTextComponent type="date" :rules="rules.required" label="Date" v-model="history.Date">
                            </FormsFieldsTextComponent>
                        </v-col>
                    </v-row>
                </v-form>

            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="font-weight-bold black--text rounded-lg" color="yellow" @click="createHistory()"> Create
                    history</v-btn>
            </v-card-actions>
        </generalCardComponent>
        <v-snackbar color="success">
            History created successfully
            <v-btn color="white" text @click="locationSnackbar=false">
                Close
            </v-btn>
        </v-snackbar>
    </v-container>
</template>

<script>
    import exideJson from '~/static/exide.json'
    export default {
        data() {
            return {
                rules: {
                    required: [value => !!value || 'Required.'],
                },
                exideJson: exideJson,
                locationSnackbar: false,
                history: {},
                comboInfo: {
                    listaLaboratory: [],
                    listaPlant: [],
                    listaRequestor: [],
                    listaLabTechnician: [],
                    listaStatus: []

                }


            }
        },
        created() {
        },
        methods: {
            createHistory() {
                if(!this.$refs.form.validate())return
                this.history.analysis = this.$route.params.id
                this.$axios.post('/histories', {
                    data: this.history
                }).then(() => {
                    this.locationSnackbar = true
                    setTimeout(() => {
                        this.$router.go(-1)
                    }, 3000);
                })
            },
        }
    }
</script>