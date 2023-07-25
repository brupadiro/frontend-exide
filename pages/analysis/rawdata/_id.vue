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
                                                    {{ chemicalItem }}
                                                </v-tab>
                                            </v-tabs>
                                            <v-card-text>
                                                <v-data-table :items="items" :headers="headersSample" hide-default-footer></v-data-table>
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
                                                    v-for="chemicalItem in sample.phisicalAnalysis"
                                                    :key="chemicalItem.id">
                                                    {{ chemicalItem }}
                                                </v-tab>
                                            </v-tabs>
                                            <v-card-text>
                                                <v-data-table :items="items" :headers="headersSample" hide-default-footer></v-data-table>
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
                tab: 1,
                chemycalTab: 1,
                phisicalTab: 1,
                sampleTab: 1,
                analysis: {
                    project: [],
                    subject: '',
                    samples: [{
                        name: '',
                        chemycal_test: [],
                        phisical_test: []
                    }],
                    expectedDate: '',
                    deliveryDate: '',
                    status: '',
                    samples_back: false
                },
                headersSample: [{
                    value: 'primero',
                    text: 'Bezeichnun'

                },{
                    value: 'segundo',
                    text: 'Rack:Gefa'

                },{
                    value: 'tercero',
                    text: 'Typ'

                },{
                    value: 'cuarto',
                    text: 'Dalum Uhrze'

                },{
                    value: 'quinto',
                    text: 'Element-Bezeichnun'

                },{
                    value: 'sexto',
                    text: 'Einheit'

                },{
                    value: 'septimo',
                    text: 'Intensity'

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

                    ]

            }
        },
        name: 'indexPage',
        created() {
            this.getAnalysis()
        },
        methods: {
            getAnalysis() {
                const idAnalysis = this.$route.params.id
                this.$axios.get(`/analyses/${idAnalysis}/?populate=*`).then((response) => {
                    this.analysis = response.data.data
                })
            },
        }
    }
</script>

<style>
    .border-tabs {
        border-bottom: 3px solid #ffa927 !important;
    }
</style>