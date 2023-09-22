<template>
    <v-container>
        <HeadersGeneralComponent>
            <template v-slot:title>
                Report
            </template>
        </HeadersGeneralComponent>
        <v-row>
            <v-col class="col-12">
                <GeneralCardComponent>
                    <v-simple-table>
                        <template v-slot:default>
                            <tbody>
                                <tr>
                                    <td>Expected end date</td>
                                    <td class="font-weight-light">{{ analysis.expectedDate }}</td>
                                    <td>Expected delivery date</td>
                                    <td class="font-weight-light">{{ analysis.deliveryDate }}</td>
                                </tr>
                                <tr>
                                    <td>Progress</td>
                                    <td class="font-weight-light">{{ analysis.progress }}</td>
                                    <td>Status</td>
                                    <td class="font-weight-light">{{ analysis.status }}</td>
                                </tr>
                                <tr>
                                    <td>BatchNumber</td>
                                    <td>{{ analysis.id }}</td>
                                    <td>Subject</td>
                                    <td class="font-weight-light">{{ analysis.subject }}</td>
                                </tr>
                                <tr>
                                    <td>Project(s)</td>
                                    <td>
                                        <v-chip small v-for="(project,index) in analysis.project" :key="index">
                                            {{ project }} &nbsp;</v-chip>
                                    </td>
                                    <td>Laboratory</td>
                                    <td class="font-weight-light">{{ analysis.laboratory }}</td>
                                </tr>
                                <tr>
                                    <td>Technician</td>
                                    <td>{{ analysis.technician }}</td>
                                    <td>Applicant Name</td>
                                    <td class="font-weight-light">{{ analysis.applicantName }}</td>
                                </tr>

                            </tbody>
                        </template>
                    </v-simple-table>
                </GeneralCardComponent>
            </v-col>
            <v-col class="col-12" v-for="sample in analysis.samples">
                <GeneralCardComponent>
                    <v-card>
                        <v-card-title class="primary">
                            Sample: {{ sample.name }}
                        </v-card-title>
                        <v-card-text v-for="(chemicalItem, index) in sample.chemicalAnalysis" :key="index" class="mt-3">
                            <v-card outlined>
                                <v-card-title class="primary text-subtitle-2">
                                    Chemical analysis: {{ chemicalItem.description }}
                                    </v-card-title>
                                    <analysisTableComponent :comboInfo="comboInfo" readonly
                                :items="chemicalItem" :values="analysisValues"
                                :sample="sample" type="chemical"></analysisTableComponent>

                                </v-card>
                        </v-card-text>


                        <v-card-text v-for="(phisicalItem, index) in sample.phisicalAnalysis" :key="index" class="mt-3">
                            <v-card outlined>
                                <v-card-title class="primary text-subtitle-2">
                                    Phisical analysis: {{ phisicalItem.description }}
                                    </v-card-title>
                                    <analysisTableComponent :comboInfo="comboInfo" readonly
                                :items="phisicalItem" :values="analysisValues"
                                :sample="sample" type="phisical"></analysisTableComponent>

                                </v-card>
                        </v-card-text>

                    </v-card>
                </GeneralCardComponent>
            </v-col>

        </v-row>
    </v-container>
</template>


<script>
    import qs from 'qs'
    import moment from 'moment'
    import axios from 'axios'
    import exideJson from '~/static/exide.json'
    import VueExcelXlsx from "vue-excel-xlsx";
    import Vue from "vue";

    Vue.use(VueExcelXlsx);

    export default {
        data() {
            return {
                idAnalysis: this.$route.params.id,
                excelColumns:[{
                    text:'',
                    value:1
                },{
                    text:'',
                    value:2
                },{
                    text:'',
                    value:3
                },{
                    text:'',
                    value:4
                },{
                    text:'',
                    value:5
                },{
                    text:'',
                    value:6
                },],
                excelData:[],
                headers: [{
                        text: 'BatchNumber',
                        value: 'id'
                    },
                    {
                        text: 'Code',
                        value: 'code'
                    },
                    {
                        text: 'Description',
                        value: 'subject'
                    },
                    {
                        text: 'FechaCreacion',
                        value: 'createdAt'
                    },
                    {
                        text: 'NombreSolicitante',
                        value: 'applicantName'
                    },
                    {
                        text: 'Status',
                        value: 'status'
                    },
                    {
                        text: 'Final del analisis',
                        value: 'deliveryDate'
                    },
                    {
                        text: 'Laboratorio',
                        value: 'laboratory'
                    },
                    {
                        text: 'Tecnico',
                        value: 'technician'
                    },
                    {
                        text: '% Avance',
                        value: 'progress'
                    },
                ],
                search: {
                    laboratory: {},
                    requestor: {},
                    technician: {},
                    expectedDate: {
                        $gte: '',
                        $lte: ''
                    },
                },
                comboInfo: {
                    listaLaboratory: [],
                    listaPlant: [],
                    listaRequestor: [],
                    listaLabTechnician: []
                },
                items: {
                    data: []
                },
                analysisValues:{},
                analysis: {}

            }
        },
        created() {
            this.getAnalysisValues()
            this.getAnalysis()
        },
        methods: {
            getAnalysis() {
                const idAnalysis = this.$route.params.id
                this.$axios.get(`/analyses/${idAnalysis}/?populate=deep`).then((response) => {
                    console.log("aca")
                    this.analysis = response.data.data
                    this.formatExcel()
                })
            },
            getAnalysisValues() {
                const idAnalysis = this.$route.params.id
                this.$axios.get(`/analysis-values/?analysis_id=${idAnalysis}`).then((response) => {
                    this.analysisValues = response.data
                })
            },
            formatExcel() {
                this.excelData.push({
                    1:'Expected end date',
                    2:this.analysis.expectedDate,
                    3:'Expected delivery date',
                    4:this.analysis.deliveryDate,

                })
            }
        },
    }
</script>