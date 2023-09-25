<template>
    <v-container fluid>
        <v-row>
            <v-col class="col-12">
                <GeneralCardComponent>
                    <div v-for="(firstlevel,index) in analysisValues" :key="index">
                        {{ index }}
                    </div>
                    <v-card-title class="border-tabs pb-0 mb-0">
                        <v-tabs v-model="sampleTab" bg-color="yellow" active-class="active-tab">
                            <v-tab class="font-weight-bold" v-for="sample in analysis.samples" :key="sample.id">
                                {{ sample.name }}
                            </v-tab>
                        </v-tabs>
                    </v-card-title>

                    <v-tabs-items v-model="sampleTab">
                        <v-tab-item v-for="sample in analysis.samples" :key="`vt${sample.id}`">

                            <v-card-title class="border-tabs pb-0 mb-0">
                                <v-tabs v-model="tab" bg-color="yellow" active-class="active-tab">
                                    <v-tab class="font-weight-bold">Chemical analysis</v-tab>
                                    <v-tab class="font-weight-black">Phisical analysis</v-tab>
                                </v-tabs>
                            </v-card-title>
                            <v-tabs-items v-model="tab">
                                <v-tab-item>
                                    <v-card-text>
                                        <v-card outlined>
                                            <v-tabs v-model="chemycalTab" bg-color="yellow" active-class="active-tab">
                                                <v-tab class="font-weight-bold"
                                                    v-for="chemicalItem in sample.chemicalAnalysis"
                                                    :key="chemicalItem.id">
                                                    {{ chemicalItem }} {{ chemycalTab }}
                                                </v-tab>
                                            </v-tabs>
                                            <v-card-text>
                                                <v-tabs-items v-model="phisicalTab">
                                                    <v-tab-item  v-for="chemicalItem in sample.chemicalAnalysis" :key="chemicalItem.id">
                                                        <v-data-table :items="items" :headers="headersSample" hide-default-footer></v-data-table>
                                                    </v-tab-item>
                                                </v-tabs-items>
                                            </v-card-text>

                                        </v-card>
                                    </v-card-text>

                                </v-tab-item>

                                <v-tab-item>
                                    <v-card-text>
                                        <v-card outlined>
                                            <v-tabs v-model="phisicalTab" bg-color="yellow" active-class="active-tab"
                                                grow>
                                                <v-tab class="font-weight-bold"
                                                    v-for="phisicalItem in sample.phisicalAnalysis"
                                                    :key="phisicalItem">
                                                    {{ phisicalItem }}  {{ phisicalTab }}
                                                </v-tab>
                                            </v-tabs>
                                            <v-card-text>
                                                <v-tabs-items v-model="phisicalTab">
                                                    <v-tab-item  v-for="phisicalItem in sample.phisicalAnalysis" :key="phisicalItem.id">
                                                        <v-data-table :items="itemsTable(sample.name,'phisical',phisicalItem)" :headers="headersSample" hide-default-footer></v-data-table>
                                                        <v-data-table :items="[{}]" :headers="headersEdit" hide-default-footer>
                                                            <template v-slot:item.Bezeichnun="{ item }">
                                                                <FormsFieldsTextComponent v-model="analysisValue.Bezeichnun"></FormsFieldsTextComponent>
                                                            </template>
                                                            <template v-slot:item.Rack="{ item }">
                                                                <FormsFieldsTextComponent v-model="analysisValue.Rack"></FormsFieldsTextComponent>
                                                            </template>
                                                            <template v-slot:item.Typ="{ item }">
                                                                <FormsFieldsTextComponent  v-model="analysisValue.Typ"></FormsFieldsTextComponent>
                                                            </template>
                                                            <template v-slot:item.DalumUhrze="{ item }">
                                                                <FormsFieldsTextComponent  v-model="analysisValue.DalumUhrze"></FormsFieldsTextComponent>
                                                            </template>
                                                            <template v-slot:item.ElementBezeichnun="{ item }">
                                                                <FormsFieldsTextComponent  v-model="analysisValue.ElementBezeichnun"></FormsFieldsTextComponent>
                                                            </template>
                                                            <template v-slot:item.Einheit="{ item }">
                                                                <FormsFieldsTextComponent v-model="analysisValue.Einheit"></FormsFieldsTextComponent>
                                                            </template>
                                                            <template v-slot:item.Intensity="{ item }">
                                                                <FormsFieldsTextComponent v-model="analysisValue.Intensity" ></FormsFieldsTextComponent>
                                                            </template>

                                                            <template v-slot:item.save="{ item }">
                                                               <v-btn color="success" @click="saveItem(sample.name,'phisical',chemicalItem)">Save</v-btn>
                                                            </template>


                                                        </v-data-table>
                                                    </v-tab-item>
                                                </v-tabs-items>
                                            </v-card-text>

                                        </v-card>
                                    </v-card-text>

                                </v-tab-item>


                            </v-tabs-items>





                        </v-tab-item>
                    </v-tabs-items>



                </GeneralCardComponent>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import itemTableComponent from '@/components/chemicalAnalysis/itemTableComponent.vue'
    export default {
        data() {
            return {
                tab: 0,
                chemycalTab: 0,
                phisicalTab: 2,
                sampleTab: 0,
                analysisValue:{
                    Bezeichnun: '',
                    Rack: '',
                    Typ: '',
                    DalumUhrze: '',
                    ElementBezeichnun: '',
                    Einheit: '',
                    Intensity: ''
                },
                analysis: {
                    project: [],
                    subject: '',
                    samples: [{
                        name: '',
                        chemicalAnalysis: [],
                        phisicalAnalysis: []
                    }],
                    expectedDate: '',
                    deliveryDate: '',
                    status: '',
                    samples_back: false
                },
                headersSample: [{
                    value: 'Bezeichnun',
                    text: 'Bezeichnun'

                },{
                    value: 'Rack',
                    text: 'Rack:Gefa'

                },{
                    value: 'Typ',
                    text: 'Typ'

                },{
                    value: 'DalumUhrze',
                    text: 'Dalum Uhrze'

                },{
                    value: 'ElementBezeichnun',
                    text: 'Element-Bezeichnun'

                },{
                    value: 'Einheit',
                    text: 'Einheit'

                },{
                    value: 'Intensity',
                    text: 'Intensity'

                }],

                headersEdit: [{
                    value: 'Bezeichnun',
                    text: 'Bezeichnun'

                },{
                    value: 'Rack',
                    text: 'Rack:Gefa'

                },{
                    value: 'Typ',
                    text: 'Typ'

                },{
                    value: 'DalumUhrze',
                    text: 'Dalum Uhrze'

                },{
                    value: 'ElementBezeichnun',
                    text: 'Element-Bezeichnun'

                },{
                    value: 'Einheit',
                    text: 'Einheit'

                },{
                    value: 'Intensity',
                    text: 'Intensity'

                },{
                    value: 'save',
                    text: 'Actions'

                }],


                items:[
                        {
                            primero:'Blank',
                            segundo:'S2:1',
                            tercero:'BLK',
                            cuarto:'15.03.2022 13:57',
                            quinto:'AG 328,068',
                            sexto:'ppm',
                            septimo:'3,45'

                        },
                        {
                            primero:'Blank',
                            segundo:'S2:1',
                            tercero:'BLK',
                            cuarto:'15.03.2022 13:57',
                            quinto:'AG 328,068',
                            sexto:'ppm',
                            septimo:'8,27'

                        },
                        {
                            primero:'Blank',
                            segundo:'S2:1',
                            tercero:'BLK',
                            cuarto:'15.03.2022 13:57',
                            quinto:'AG 328,068',
                            sexto:'ppm',
                            septimo:'9,9'

                        },
                        {
                            primero:'Blank',
                            segundo:'S2:1',
                            tercero:'BLK',
                            cuarto:'15.03.2022 13:57',
                            quinto:'AG 328,068',
                            sexto:'ppm',
                            septimo:'5,1'

                        },

                    ],
                    analysisValues:{}

            }
        },
        name: 'indexPage',
        created() {
            this.getAnalysis()
            this.getAnalysisValues()
        },
        methods: {
            itemsTable(sampleName, type, item) {
    if (this.analysisValues && this.analysisValues[sampleName] && this.analysisValues[sampleName][type] && this.analysisValues[sampleName][type][item] !== undefined) {
        return this.analysisValues[sampleName][type][item];
    }
    return [];
},
            getAnalysis() {
                const idAnalysis = this.$route.params.id
                this.$axios.get(`/analyses/${idAnalysis}/?populate=*`).then((response) => {
                    this.analysis = response.data.data
                })
            },
            getAnalysisValues() {
                const idAnalysis = this.$route.params.id
                this.$axios.get(`/analysis-values/?analysis_id=${idAnalysis}`).then((response) => {
                    this.analysisValues = response.data
                })
            },


            async saveItem(sample,type,analysis_name){
                for(let column in this.analysisValue){
                    if(this.analysisValue[column] == ''){
                        continue
                    }
                   await this.$axios.post('/analysis-values',{
                        data:{
                            sample: sample,
                            type: type,
                            column: column,
                            value: this.analysisValue[column],
                            analysis_name: analysis_name,
                            analysis: this.$route.params.id
                        }
                    })
                }
                this.analysisValue = {
                    Bezeichnun: '',
                    Rack: '',
                    Typ: '',
                    DalumUhrze: '',
                    ElementBezeichnun: '',
                    Einheit: '',
                    Intensity: ''
                }
            }
        },
        computed:{

        }
    }
</script>

<style>
    .border-tabs {
        border-bottom: 3px solid #ffa927 !important;
    }
</style>