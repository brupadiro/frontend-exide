<template>
    <v-container fluid>
        <GeneralCardComponent>
            <GeneralCardTitleComponent>New analysis</GeneralCardTitleComponent>
            <v-divider></v-divider>
            <v-form ref="form">

                <v-card-text>
                    <v-row>
                        <v-col class="col-12">
                            <v-text-field :rules="rules.required" label="Batch Number" type="number" outlined v-model="analysis.code"></v-text-field>
                        </v-col>
                        <v-col class="col-12">
                            <v-card outlined>
                                <v-toolbar color="grey lighten-2" tile elevation="0" dense>
                                    <v-toolbar-title class="text-subtitle-1 font-weight-bold">Project/ECN*:
                                    </v-toolbar-title>
                                </v-toolbar>
                                <v-card-text>
                                    <v-row>
                                        <v-col>
                                            <v-checkbox v-model="analysis.project" value="Research Project"
                                                label="Research Project"></v-checkbox>
                                        </v-col>
                                        <v-col>
                                            <v-checkbox v-model="analysis.project" value="Founded Project"
                                                label="Founded project">
                                            </v-checkbox>
                                        </v-col>
                                        <v-col>
                                            <v-checkbox v-model="analysis.project" value="PMO" label="PMO"></v-checkbox>
                                        </v-col>
                                        <v-col>
                                            <v-checkbox v-model="analysis.project" value="CRP" label="CRP"></v-checkbox>
                                        </v-col>
                                        <v-col>
                                            <v-checkbox v-model="analysis.project" value="Other" label="Other">
                                            </v-checkbox>
                                        </v-col>

                                    </v-row>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col class="col-12">
                            <v-card outlined>
                                <v-toolbar color="grey lighten-2" tile elevation="0" dense>
                                    <v-toolbar-title><span class="text-subtitle-1 font-weight-bold">Subject*:</span>
                                        <span class="text-subtitle-2">Short description of the analytical scope (include
                                            ETS
                                            or
                                            expected value when applicable)</span>
                                    </v-toolbar-title>
                                </v-toolbar>
                                <v-card-text>
                                    <v-textarea :rules="rules.required" outlined v-model="analysis.subject"></v-textarea>
                                </v-card-text>
                            </v-card>
                        </v-col>

                        <v-col class="col-12">
                            <v-card>
                                <v-toolbar color="grey lighten-2" tile elevation="0" dense>
                                    <v-toolbar-title><span class="text-subtitle-1 font-weight-bold">List of
                                            Samples*:</span>
                                        <span class="text-subtitle-2">Description and identification/labelling (Insert
                                            more
                                            rows if
                                            needed)</span>
                                    </v-toolbar-title>
                                    <v-spacer></v-spacer>
                                    <v-btn-toggle x-small>
                                        <v-btn small text @click="removeSample">
                                            <v-icon>mdi-minus</v-icon>
                                        </v-btn>
                                        <v-btn small text @click="addSample">
                                            <v-icon>mdi-plus</v-icon>
                                        </v-btn>
                                    </v-btn-toggle>
                                </v-toolbar>
                                <div v-for="(sample,index) in analysis.samples" :key="index">
                                    <v-text-field v-model="analysis.samples[index].name"  :rules="rules.required"></v-text-field>
                                </div>
                                <v-card-subtitle class="font-weight-bold black--text">Samples back*:</v-card-subtitle>
                                <v-card-actions>
                                    <v-checkbox hide-details class="mt-0" label="Yes"></v-checkbox>
                                    <v-checkbox hide-details class="mt-0" label="No"></v-checkbox>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                        <v-col class="col-12" :key="sindex" v-for="(sample,sindex) in analysis.samples">
                            <v-card outlined>
                                <v-toolbar color="grey lighten-2" tile elevation="0" dense>
                                    <v-toolbar-title class="text-subtitle-1 font-weight-bold">Muestra: {{ sample.name }}
                                    </v-toolbar-title>
                                </v-toolbar>
                                <divider></divider>
                                <v-card-text>
                                    <v-row>
                                        <v-col class="col-12">
                                            <v-card outlined>
                                                <v-row no-gutters class="grey lighten-2">
                                                    <v-col class="col-6">
                                                        <v-row no-gutters>
                                                            <v-col class="col-12  py-2 border-table">
                                                                <H3 class="text-center">Chemical analysis*:</H3>
                                                            </v-col>
                                                        </v-row>
                                                    </v-col>
                                                    <v-col class="col-6">
                                                        <v-row no-gutters>
                                                            <v-col class="col-12  py-2 border-table">
                                                                <H3 class="text-center">Chemical analysis*:</H3>
                                                            </v-col>
                                                        </v-row>
                                                    </v-col>
                                                </v-row>
                                                <v-row no-gutters>
                                                    <v-col class="col-6"
                                                        v-for="(normative,index) in chemicalAnalysisItems" :key="index">
                                                        <analysisCheckboxComponent 
                                                        v-model="analysis.samples[sindex].chemicalAnalysis"
                                                        :normativeItems="normativeItems.data"
                                                        :normative="normative"
                                                        ></analysisCheckboxComponent>
                                                        <!--
                                                        <v-checkbox :label="normative.description" :value="normative.id"
                                                            v-model="analysis.samples[sindex].chemicalAnalysis"
                                                            class="font-weight-bold black--text"></v-checkbox>
                                                            <v-select flat label="Select an option" 
                                                            v-model="analysis.samples[sindex].chemicalAnalysis"
                                                            v-show="getSecondaryNormativeStepsFromSameNormative(normative).length>0"
                                                            :items="getSecondaryNormativeStepsFromSameNormative(normative)"
                                                            dense item-text="description" item-value="id"></v-select>

                                                        -->
                                                    </v-col>
                                                </v-row>
                                            </v-card>
                                        </v-col>
                                        <v-col class="col-12">
                                            <v-card outlined>
                                                <v-row no-gutters class="grey lighten-2">
                                                    <v-col class="col-6">
                                                        <v-row no-gutters>
                                                            <v-col class="col-12  py-2 border-table">
                                                                <H3 class="text-center">Phisical analysis*:</H3>
                                                            </v-col>
                                                        </v-row>
                                                    </v-col>
                                                    <v-col class="col-6">
                                                        <v-row no-gutters>
                                                            <v-col class="col-12  py-2 border-table">
                                                                <H3 class="text-center">Phisical analysis*:</H3>
                                                            </v-col>
                                                        </v-row>
                                                    </v-col>
                                                </v-row>
                                                <v-row no-gutters>
                                                    <v-col class="col-6" v-for="(normative,index) in phisicalAnalysisItems"
                                                        :key="index">
                                                        <analysisCheckboxComponent 
                                                        v-model="analysis.samples[sindex].phisicalAnalysis"
                                                        :normativeItems="normativeItems.data"
                                                        :normative="normative"
                                                        ></analysisCheckboxComponent>

                                                    </v-col>
                                                </v-row>
                                            </v-card>
                                        </v-col>

                                    </v-row>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col class="col-md-6 col-12">
                            <b class="black--text">Fecha de Finalizacion Esperada</b>
                        </v-col>
                        <v-col class="col-md-6 col-12">
                            <FormsFieldsTextComponent type="date" v-model="analysis.expectedDate" dense outlined>
                            </FormsFieldsTextComponent>
                        </v-col>
                        <v-col class="col-md-6 col-12">
                            <b class="black--text">Fecha de entrega</b>
                        </v-col>
                        <v-col class="col-md-6 col-12">
                            <FormsFieldsTextComponent type="date" v-model="analysis.deliveryDate" dense outlined>
                            </FormsFieldsTextComponent>
                        </v-col>
                        <v-col class="col-md-6 col-12">
                            <b class="black--text">Estado</b>
                        </v-col>
                        <v-col class="col-md-6 col-12">
                            <FormsFieldsSelectComponent type="date" v-model="analysis.status" dense
                                :items="statusItems"></FormsFieldsSelectComponent>
                        </v-col>

                        <v-col class="col-md-6 col-12">
                            <b class="black--text">Technician</b>
                        </v-col>
                        <v-col class="col-md-6 col-12">
                            <FormsFieldsSelectComponent v-model="analysis.technician" dense
                                :items="comboInfo.listaLabTechnician"></FormsFieldsSelectComponent>
                        </v-col>

                        <v-col class="col-md-6 col-12">
                            <b class="black--text">Laboratory</b>
                        </v-col>
                        <v-col class="col-md-6 col-12">
                            <FormsFieldsSelectComponent v-model="analysis.laboratory" dense
                                :items="comboInfo.listaLaboratory"></FormsFieldsSelectComponent>
                        </v-col>

                        <v-col class="col-md-6 col-12">
                            <b class="black--text">Nombre solicitante</b>
                        </v-col>
                        <v-col class="col-md-6 col-12">
                            <FormsFieldsSelectComponent v-model="analysis.aplicantName" dense
                                :items="comboInfo.listaRequestor"></FormsFieldsSelectComponent>
                        </v-col>



                    </v-row>

                </v-card-text>
            </v-form>

            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="createAnalysis()" color="yellow" class="font-weight-bold rounded-lg">Create analysis
                </v-btn>
            </v-card-actions>
        </GeneralCardComponent>
        <v-snackbar v-model="snackBarSuccess" color="success">
            <span class="white--text">Analysis created successfully</span>
            <v-btn color="white" text @click="snackBarSuccess = false">Close</v-btn>
        </v-snackbar>
    </v-container>
</template>
<script>
    import itemTableComponent from '@/components/chemicalAnalysis/itemTableComponent.vue'
    import exideJson from '~/static/exide.json'
    export default {
        data() {
            return {
                exideJson:exideJson,
                rules:{
                    required:[(v) => !!v || 'This field is required']
                },


                snackBarSuccess: false,
                normativeItems: {
                    data: []
                },

                statusItems: [
                    'Peticion hecha',
                    'Peticion aceptada',
                    'Muestra enviada',
                    'Enviada  a otro laboratorio',
                    'Muestra en cola',
                    'Analisis finalizado',
                    'Muestras tiradas',
                    'Cancelado'
                ],
                analysis: {
                    project: [],
                    subject: '',
                    samples: [{
                        name: '',
                        phisicalAnalysis: [],
                        chemicalAnalysis: []
                    }],
                    expectedDate: '',
                    deliveryDate: '',
                    status: '',
                    samples_back: false
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
            this.getNormatives()

        },
        name: 'indexPage',
        methods: {
            addSample() {
                this.analysis.samples.push({
                    name: '',
                    chemicalAnalysis: [],
                    phisicalAnalysis: []
                })
                this.$forceUpdate()
            },
            removeSample() {
                this.analysis.samples.splice(this.analysis.samples.length - 1, 1)
            },
            getNormatives() {
                this.$axios.get('/normative-steps/?populate=*')
                    .then(response => {
                        this.normativeItems = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            setChemicalAnalysis(value, index) {
                this.analysis.chemicalAnalysis[index] = value
                console.log(this.analysis.chemicalAnalysis)
            },
            createAnalysis() {
                if(!this.$refs.form.validate()) return
                this.$axios.post('/analyses/', {
                    data:this.analysis
                })
                    .then(()=>{
                        this.snackBarSuccess = true
                    setTimeout(() => {
                        this.$router.push('/analysis')
                    }, 2500);
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


        },

        computed: {
            chemicalAnalysisItems() {
                var data = []
                data = this.normativeItems.data.filter((n)=>{
                    return n.normative?.type =='Chemical'  && n.type=='main'
                })
                return data
            },
            phisicalAnalysisItems() {
                var data = []
                data = this.normativeItems.data.filter((n)=>{
                    return n.normative?.type =='Phisical' && n.type=='main'
                })
                return data
            }

        }

    }
</script>

<style lang="scss">
    .card-width {
        width: 200px;
    }

    .title {
        height: 64px;
        font-family: 'Fira Sans', sans-serif;
        color: white !important;
        font-weight: 800 !important;

    }

    .gradient-primary {
        background: linear-gradient(180deg, #695d53, #a77d31bf)
    }

    .theme--light.v-stepper .v-stepper__header .v-divider {
        border-width: 3px;
        border-radius: 5px;

    }

    .theme--light.v-label {
        color: black !important;
    }
</style>