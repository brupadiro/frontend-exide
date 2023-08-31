<template>
    <v-container>
        <generalCardComponent>
            <generalCardTitleComponent>Location&nbsp;<small class="text-subtitle-2">New Registration</small>
            </generalCardTitleComponent>
            <v-divider></v-divider>
            <v-card-text>
                <v-row>
                    <v-col class="col-12">
                        <FormsFieldsSelectComponent label="Plant" v-model="location.plant" :items="comboInfo.listaPlant"></FormsFieldsSelectComponent>
                    </v-col>
                    <v-col class="col-12">
                        <FormsFieldsSelectComponent label="Tipo de modulo" v-model="location.moduleType" :items="['Electrico','Quimico']"></FormsFieldsSelectComponent>
                    </v-col>
                    <v-col class="col-12">
                        <generalCardComponent outlined>
                                <v-simple-table>
                                    <thead class="primary">
                                        <tr>
                                            <th class="text-center white--text">Location</th>
                                            <th class="text-center white--text">Capacity</th>
                                            <th class="text-center white--text">Batteries</th>
                                            <th class="text-center white--text">Occuped (%)</th>
                                            <th class="text-center white--text">Status</th>
                                            <th class="text-center white--text">Max Until</th>
                                            <th class="text-center white--text">Temperature Control</th>
                                            <th class="text-center white--text">Typology</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <formsFieldsTextComponent v-model="location.location" single-line>
                                                </formsFieldsTextComponent>
                                            </td>
                                            <td>
                                                <formsFieldsTextComponent v-model="location.capacity" type="number">
                                                </formsFieldsTextComponent>
                                            </td>
                                            <td>
                                                <formsFieldsTextComponent v-model="location.batteries" type="number"
                                                    >
                                                </formsFieldsTextComponent>
                                            </td>
                                            <td>
                                                <formsFieldsTextComponent v-model="location.occuped" type="number" single-line>
                                                </formsFieldsTextComponent>
                                            </td>
                                            <td>
                                                <FormsFieldsSelectComponent v-model="location.status"
                                                    :items="['Available', 'Unavailable', 'Reserved', 'Complete']">
                                                </FormsFieldsSelectComponent>
                                            </td>
                                            <td>
                                                <formsFieldsTextComponent v-model="location.maxUntil" type="datetime"
                                                    >
                                                </formsFieldsTextComponent>
                                            </td>
                                            <td>
                                                <v-input>
                                                    <v-checkbox v-model="location.temperatureControl">
                                                </v-checkbox>
                                                <formsFieldsTextComponent v-if="location.temperatureControl"
                                                    v-model="location.temperature" label="Temperature" type="number">
                                                </formsFieldsTextComponent>
                                                </v-input>
                                            </td>
                                            <td>
                                                <FormsFieldsSelectComponent v-model="location.typology"
                                                    :items="['Circuit', 'Bath', 'Fridge', 'Vibration', 'Warehouse', 'Other']"
                                                    label="Typology"></FormsFieldsSelectComponent>
                                            </td>
                                        </tr>
                                    </tbody>
                                </v-simple-table>

                        </generalCardComponent>
                    </v-col>
                    <v-col class="col-12">
                        <formsFieldsTextComponent label="Reserved user" disabled filled></formsFieldsTextComponent>
                    </v-col>
                    <v-col class="col-12">
                        <FormsFieldsSelectComponent label="IdInstruments"></FormsFieldsSelectComponent>
                    </v-col>
                    <v-col class="col-12">
                        <FormsFieldsSelectComponent label="Typology Step"></FormsFieldsSelectComponent>
                    </v-col>
                    <v-col class="col-12">
                        <FormsFieldsSelectComponent label="Attach"></FormsFieldsSelectComponent>
                    </v-col>

                    <v-col class="col-12">

                        <v-simple-table>
                            <thead class="primary">
                                <tr>
                                    <th class="text-center white--text">Battery</th>
                                    <th class="text-center white--text">Until</th>
                                    <th class="text-center white--text">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                    </td>
                                    <td>
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                            </tbody>
                        </v-simple-table>
                    </v-col>


                </v-row>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="font-weight-bold black--text rounded-lg" color="yellow" @click="updateLocation()"> Update location</v-btn>
            </v-card-actions>

        </generalCardComponent>
        <v-snackbar color="success">
            Location created successfully
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
                exideJson:exideJson,
                locationSnackbar:false,
                location: {
                    location: '',
                    capacity: '0',
                    batteries: '0',
                    occuped: '0%',
                    status: '',
                    maxUntil: '',
                    temperatureControl: false,
                    temperature: '',
                    typology: '',
                    moduleType:'Quimico'

                },
                comboInfo:{
                    listaLaboratory:[],
                    listaPlant:[],
                    listaRequestor:[],
                    listaLabTechnician:[],
                    listaStatus:[]
     
                }


            }
        },
        created() {
            this.getComboInfo()
            this.getLocation()
        },
        methods:{
            updateLocation(){
                this.$axios.put(`/locations/${this.$route.params.id}`,{
                    data:this.location
                }).then(()=>{
                    this.locationSnackbar=true
                    setTimeout(() => {
                        this.$router.push('/location')
                    }, 3000);
                })
            },
            getLocation(){
                const idLocation = this.$route.params.id
                this.$axios.get('/locations/'+idLocation).then((response)=>{
                    this.location = response.data.data
                })
            },


            getComboInfo() {
                let result = {};
                    for (let key in this.exideJson) {
                        if (this.exideJson.hasOwnProperty(key) && typeof this.exideJson[key] === 'object') {
                            result[key] = Object.values(this.exideJson[key]);
                        }
                    }
                    this.comboInfo =  result
            },

        }
    }
</script>