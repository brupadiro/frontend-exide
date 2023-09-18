<template>
    <v-container>
        <v-row>
            <v-col class="col-12">
                <GeneralCardComponent>
                    <GeneralCardTitleComponent>Create User</GeneralCardTitleComponent>
                    <v-divider> </v-divider>
                    <v-card-text>
                        <v-row>
                            <v-col class="col-12 col-md-6">
                                <FormsFieldsTextComponent label="Name" v-model="user.name" :rules="rules.required"></FormsFieldsTextComponent>
                            </v-col>
                            <v-col class="col-12 col-md-6">
                                <FormsFieldsTextComponent label="Position" v-model="user.position" :rules="rules.required">
                                </FormsFieldsTextComponent>
                            </v-col>
                            <v-col class="col-12 col-md-6">
                                <FormsFieldsTextComponent type="email" label="Email" v-model="user.email" :rules="rules.required">
                                </FormsFieldsTextComponent>
                            </v-col>
                            <v-col class="col-12 col-md-6">
                                <FormsFieldsTextComponent label="Phone" v-model="user.phone" :rules="rules.required"></FormsFieldsTextComponent>
                            </v-col>
                            <v-col class="col-12 col-md-6">
                                <FormsFieldsSelectComponent multiple :items="['Electrico','Quimico']" :rules="rules.required"
                                    label="Module type" v-model="user.moduleType">
                                </FormsFieldsSelectComponent>
                            </v-col>
                            <v-col class="col-12 col-md-6">
                                <FormsFieldsTextComponent label="Address1" v-model="user.address1">
                                </FormsFieldsTextComponent>
                            </v-col>
                            <v-col class="col-12">
                                <v-card outlined>
                                    <v-card-text>
                                        <v-row no-gutters>
                                            <v-col class="col-12 col-md-6">
                                                <v-checkbox hide-details label="Laboratory director" v-model="user.laboratory_director.active"></v-checkbox>
                                            </v-col>
                                            <v-col class="col-12 col-md-6">
                                                <FormsFieldsSelectComponent :items="comboInfo.listaLaboratory" v-model="user.laboratory_director.laboratory">
                                                </FormsFieldsSelectComponent>
                                            </v-col>
                                        </v-row>

                                    </v-card-text>
                                </v-card>
                            </v-col>
                            <v-col class="col-12">
                                <v-card outlined>
                                    <v-card-text>
                                        <v-row no-gutters>
                                            <v-col class="col-12 col-md-6">
                                                <v-checkbox hide-details label="Laboratory technicician"  v-model="user.laboratory_techinician.active"></v-checkbox>
                                            </v-col>
                                            <v-col class="col-12 col-md-6">
                                                <FormsFieldsSelectComponent :items="comboInfo.listaLaboratory"  v-model="user.laboratory_techinician.laboratory">
                                                </FormsFieldsSelectComponent>
                                            </v-col>
                                        </v-row>

                                    </v-card-text>
                                </v-card>
                            </v-col>
                            <v-col class="col-12">
                                <v-card outlined>
                                    <v-card-text>
                                        <v-row no-gutters>
                                            <v-col class="col-12 col-md-6">
                                                <v-checkbox hide-details label="Coordinator"  v-model="user.coordinator.active"></v-checkbox>
                                            </v-col>
                                            <v-col class="col-12 col-md-6">
                                                <FormsFieldsSelectComponent :items="comboInfo.listaLaboratory" v-model="user.coordinator.laboratory">
                                                </FormsFieldsSelectComponent>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                            <v-col class="col-12 col-md-12">
                                <v-checkbox label="Project leader"  v-model="user.project_leader"></v-checkbox>
                            </v-col>
                            <v-col class="col-12 col-md-12">
                                <v-checkbox label="System Administrator"  v-model="user.system_administrator"></v-checkbox>
                            </v-col>
                            <v-col class="col-12 col-md-12">
                                <v-checkbox label="Supervisor"  v-model="user.supervisor"></v-checkbox>
                            </v-col>
                            <v-col class="col-12 col-md-12">
                                <v-checkbox label="System Calibrador"  v-model="user.calibrador"></v-checkbox>
                            </v-col>
                            <v-col class="col-12 col-md-12">
                                <v-checkbox label="Plant satelite"  v-model="user.plant_satelite"></v-checkbox>
                            </v-col>

                        </v-row>

                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="font-weight-bold black--text rounded-lg" color="yellow" @click="createUser()">
                            Create user</v-btn>
                    </v-card-actions>
                </GeneralCardComponent>
            </v-col>
        </v-row>
        <v-snackbar color="success" v-model="userSnackbar">
            User created successfully
            <v-btn color="white" text @click="userSnackbar=false">
                Close
            </v-btn>
        </v-snackbar>
    </v-container>
</template>


<script>
    import qs from 'qs'
    import exideJson from '~/static/exide.json'
    export default {
        data() {
            return {
                rules:{
                    required: [value => !!value || 'Required.'],
                },
                exideJson: exideJson,
                headers: [{
                        text: 'Id',
                        value: 'id'
                    },
                    {
                        text: 'Location',
                        value: 'location'
                    },
                    {
                        text: 'Instruments',
                        value: 'instruments'
                    },
                    {
                        text: 'Capacity',
                        value: 'capacity'
                    },
                    {
                        text: 'Module type',
                        value: 'moduleType'
                    },
                    {
                        text: 'Batteries',
                        value: 'batteries'
                    },
                    {
                        text: 'Batteries Details',
                        value: 'batteriesDetails'
                    },
                    {
                        text: 'Occuped',
                        value: 'occuped'
                    },
                    {
                        text: 'Actions',
                        value: 'actions',
                    },
                ],
                user: {
                    moduleType: [],
                    laboratory_director:{},
                    laboratory_techinician:{},
                    coordinator:{},
                },
                comboInfo: {
                    listaLaboratory: [],
                    listaPlant: [],
                    listaRequestor: [],
                    listaLabTechnician: [],
                    listaStatus: []

                },
                userSnackbar: false,
                listaTipology: ['Circuit', 'Bath', 'Fridge', 'Vibration', 'Warehouse', 'Other']


            }
        },
        created() {
            this.getComboInfo()
        },
        methods: {
            getPromotions() {
                this.items = {}
                this.$axios.get('/locations/', ).then((response) => {
                    this.items = response.data
                })
            },
            createUser() {
                this.user.username = this.user.email
                this.user.password = this.user.email 
                this.$axios.post('/auth/local/register',this.user).then(() => {
                    this.userSnackbar = true
                    setTimeout(() => {
                        this.userSnackbar = false
                    }, 3000)
                    this.$router.push('/security/users')
                })
            },
            getComboInfo() {
                let result = {};
                for (let key in this.exideJson) {
                    if (this.exideJson.hasOwnProperty(key) && typeof this.exideJson[key] === 'object') {
                        result[key] = Object.values(this.exideJson[key]);
                    }
                }
                this.comboInfo = result
            },
        }
    }
</script>