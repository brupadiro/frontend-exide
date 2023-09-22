<template>
    <v-container>
        <v-row>
            <v-col class="col-12">

                <GeneralCardComponent>
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
                                <v-tabs v-model="typeTab" bg-color="yellow" active-class="active-tab">
                                    <v-tab class="font-weight-black">Chemical analysis</v-tab>
                                    <v-tab class="font-weight-black">Phisical analysis</v-tab>
                                </v-tabs>
                            </v-card-title>
                            <v-tabs-items v-model="typeTab">
                                <v-tab-item>
                                    <v-card-text>
                                        <v-card outlined>
                                            <v-tabs v-model="analysisChemycalTab" bg-color="yellow"
                                                active-class="active-tab">
                                                <v-tab class="font-weight-bold"
                                                    v-for="chemicalItem in sample.chemicalAnalysis"
                                                    :key="chemicalItem.id">
                                                    <v-menu bottom>
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <v-btn color="yellow" text v-bind="attrs" v-on="on">
                                                                {{ chemicalItem.description }}<v-icon
                                                                    class="white rounded-md ml-2" color="black">
                                                                    mdi-chevron-down</v-icon>
                                                            </v-btn>
                                                        </template>
                                                        <v-list>
                                                            <v-list-item
                                                                @click="()=>{historicoModal = true;historialAnalysis = itemsTable(sample.name,'chemical',chemicalItem.description)}">
                                                                <v-list-item-title>Historico</v-list-item-title>
                                                            </v-list-item>

                                                        </v-list>
                                                    </v-menu>

                                                </v-tab>
                                            </v-tabs>
                                            <v-card-text>
                                                <v-tabs-items v-model="analysisChemycalTab">
                                                    <v-tab-item v-for="chemicalItem in sample.chemicalAnalysis"
                                                        :key="chemicalItem.id">
                                                        <analysisTableComponent :comboInfo="comboInfo"
                                                            :items="chemicalItem" :values="analysisValues"
                                                            :sample="sample" type="chemical"></analysisTableComponent>
                                                    </v-tab-item>
                                                </v-tabs-items>
                                            </v-card-text>
                                        </v-card>
                                    </v-card-text>
                                </v-tab-item>
                                <v-tab-item>
                                    <v-card-text>
                                        <v-card outlined>
                                            <v-tabs v-model="analysisPhisicalTab" bg-color="yellow"
                                                active-class="active-tab">
                                                <v-tab class="font-weight-bold"
                                                    v-for="phisicalItem in sample.phisicalAnalysis" :key="phisicalItem">

                                                    <v-menu bottom>
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <v-btn color="yellow" text v-bind="attrs" v-on="on">
                                                                {{ phisicalItem.description }}<v-icon
                                                                    class="white rounded-md ml-2" color="black">
                                                                    mdi-chevron-down</v-icon>
                                                            </v-btn>
                                                        </template>
                                                        <v-list>
                                                            <v-list-item
                                                                @click="()=>{historicoModal = true;historialAnalysis = itemsTable(sample.name,'phisical',phisicalItem.description)}">
                                                                <v-list-item-title>Historico</v-list-item-title>
                                                            </v-list-item>

                                                        </v-list>
                                                    </v-menu>



                                                </v-tab>
                                            </v-tabs>
                                            <v-card-text>
                                                <v-tabs-items v-model="analysisPhisicalTab">
                                                    <v-tab-item v-for="phisicalItem in sample.phisicalAnalysis"
                                                        :key="phisicalItem.id">

                                                        <analysisTableComponent :comboInfo="comboInfo"
                                                            :items="phisicalItem" :values="analysisValues"
                                                            :sample="sample" type="phisical"></analysisTableComponent>
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
        <v-dialog v-model="historicoModal" persistent max-width="800">
            <GeneralCardComponent>
                <GeneralCardTitleComponent>Historical
                    <v-spacer></v-spacer>
                    <v-btn icon @click="historicoModal = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </GeneralCardTitleComponent>
                <v-divider></v-divider>
                <v-card-text>
                    <v-data-table :headers="[
                        {text:'Date',value:'createdAt'},
                        {text:'Laboratory',value:'laboratory'},
                        {text:'Note',value:'notes'},{text:'User',value:'user'}]"
                        :items="historialAnalysis" hide-default-footer>
                        <template v-slot:item.createdAt="{item}">
                            {{item.createdAt | formatDate}}
                        </template>
                        <template v-slot:item.user>
                            admin@ensayobaterias.net
                        </template>
                    </v-data-table>
                </v-card-text>
            </GeneralCardComponent>
        </v-dialog>


    </v-container>
</template>

<script>
    import itemTableComponent from '@/components/chemicalAnalysis/itemTableComponent.vue'
    import exideJson from '~/static/exide.json'
    import moment from 'moment'
    export default {
        filters: {
            formatDate(value) {
                return moment(value).format('DD/MM/YYYY')
            }
        },
        data() {
            return {
                exideJson: exideJson,
                historicoModal: false,
                sampleTab: 0,
                typeTab: 0,
                analysisChemycalTab: 0,
                analysisPhisicalTab: 0,
                analysisValue: {
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
                historialAnalysis: [],
                headersSample: [{
                    value: 'Bezeichnun',
                    text: 'Bezeichnun'

                }, {
                    value: 'Rack',
                    text: 'Rack:Gefa'

                }, {
                    value: 'Typ',
                    text: 'Typ'

                }, {
                    value: 'DalumUhrze',
                    text: 'Dalum Uhrze'

                }, {
                    value: 'ElementBezeichnun',
                    text: 'Element-Bezeichnun'

                }, {
                    value: 'Einheit',
                    text: 'Einheit'

                }, {
                    value: 'Intensity',
                    text: 'Intensity'

                }],

                headersEdit: [{
                    value: 'Bezeichnun',
                    text: 'Bezeichnun'

                }, {
                    value: 'Rack',
                    text: 'Rack:Gefa'

                }, {
                    value: 'Typ',
                    text: 'Typ'

                }, {
                    value: 'DalumUhrze',
                    text: 'Dalum Uhrze'

                }, {
                    value: 'ElementBezeichnun',
                    text: 'Element-Bezeichnun'

                }, {
                    value: 'Einheit',
                    text: 'Einheit'

                }, {
                    value: 'Intensity',
                    text: 'Intensity'

                }],


                items: [{
                        primero: 'Blank',
                        segundo: 'S2:1',
                        tercero: 'BLK',
                        cuarto: '15.03.2022 13:57',
                        quinto: 'AG 328,068',
                        sexto: 'ppm',
                        septimo: '3,45'

                    },
                    {
                        primero: 'Blank',
                        segundo: 'S2:1',
                        tercero: 'BLK',
                        cuarto: '15.03.2022 13:57',
                        quinto: 'AG 328,068',
                        sexto: 'ppm',
                        septimo: '8,27'

                    },
                    {
                        primero: 'Blank',
                        segundo: 'S2:1',
                        tercero: 'BLK',
                        cuarto: '15.03.2022 13:57',
                        quinto: 'AG 328,068',
                        sexto: 'ppm',
                        septimo: '9,9'

                    },
                    {
                        primero: 'Blank',
                        segundo: 'S2:1',
                        tercero: 'BLK',
                        cuarto: '15.03.2022 13:57',
                        quinto: 'AG 328,068',
                        sexto: 'ppm',
                        septimo: '5,1'

                    },

                ],
                comboInfo: {},
                analysisValues: {}

            }
        },
        name: 'indexPage',
        created() {
            this.getAnalysis()
            this.getAnalysisValues()
            this.getComboInfo()

        },
        mounted() {
            this.$root.$on('getValues', () => {
                this.getAnalysisValues()
            })
        },
        methods: {
            getComboInfo() {
                let result = {};
                for (let key in this.exideJson) {
                    if (this.exideJson.hasOwnProperty(key) && typeof this.exideJson[key] === 'object') {
                        result[key] = Object.values(this.exideJson[key]);
                    }
                }
                this.comboInfo = result
            },


            itemsTable(sampleName, type, item) {
                if (this.analysisValues[sampleName]) console.log(this.analysisValues[sampleName][type])
                if (this.analysisValues && this.analysisValues[sampleName] && this.analysisValues[sampleName][type] &&
                    this.analysisValues[sampleName][type][item] !== undefined) {
                    return this.analysisValues[sampleName][type][item].data;
                }
                return [];
            },

            headersTable(sampleName, type, item) {
                if (this.analysisValues[sampleName]) console.log(this.analysisValues[sampleName][type])
                if (this.analysisValues && this.analysisValues[sampleName] && this.analysisValues[sampleName][type] &&
                    this.analysisValues[sampleName][type][item] !== undefined) {
                    return this.analysisValues[sampleName][type][item].headers.map((item) => {
                        return {
                            ...item,
                            value: item.text.replace(" ", "_"),
                        }
                    });
                }
                return [];
            },


            getAnalysis() {
                const idAnalysis = this.$route.params.id
                this.$axios.get(`/analyses/${idAnalysis}/?populate=deep`).then((response) => {
                    this.analysis = response.data.data
                })
            },
            getAnalysisValues() {
                const idAnalysis = this.$route.params.id
                this.$axios.get(`/analysis-values/?analysis_id=${idAnalysis}`).then((response) => {
                    this.analysisValues = response.data
                })
            },


            async saveItem(sample, normative, type) {
                await this.$axios.post('/analysis-values', {
                    data: {
                        sample: sample,
                        type: type,
                        normative_step: normative,
                        analysis: this.$route.params.id,
                        ...this.analysisValue
                    }
                })
                this.analysisValue = {
                    Bezeichnun: '',
                    Rack: '',
                    Typ: '',
                    DalumUhrze: '',
                    ElementBezeichnun: '',
                    Einheit: '',
                    Intensity: ''
                }
                await this.getAnalysisValues()
            }
        }
    }
</script>

<style>
    .border-tabs {
        border-bottom: 3px solid #ffa927 !important;
    }
</style>