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
                    <v-simple-table>
                        <template v-slot:default>
                            <tbody>
                                <tr>
                                    <td>Sample</td>
                                    <td class="font-weight-light">{{ sample.name }}</td>
                                    <td></td>
                                    <td class="font-weight-light"></td>
                                    <td class="font-weight-light"></td>
                                    <td class="font-weight-light"></td>
                                    <td class="font-weight-light"></td>
                                </tr>
                                <tr class="primary">
                                        <th class="white--text"></th>
                                        <th class="white--text"></th>
                                        <th class="white--text"></th>
                                        <th class="white--text"></th>
                                        <th class="white--text"></th>
                                        <th class="white--text"></th>
                                        <th class="white--text"></th>
                                    </tr>


                                <template v-for="chemical in sample.chemicalAnalysis">
                                    <tr>
                                        <td>Chemical analysis</td>
                                        <td class="font-weight-light">{{ chemical.description }}</td>
                                        <td></td>
                                        <td class="font-weight-light"></td>
                                        <td class="font-weight-light"></td>
                                        <td class="font-weight-light"></td>
                                        <td class="font-weight-light"></td>
                                    </tr>
                                    <tr class="primary">
                                        <th class="white--text">Bezeichnun</th>
                                        <th class="white--text">Rack:Gefa</th>
                                        <th class="white--text">Typ</th>
                                        <th class="white--text">Dalum Uhrze</th>
                                        <th class="white--text">Element-Bezeichnun</th>
                                        <th class="white--text">Einheit</th>
                                        <th class="white--text">Intensity</th>
                                    </tr>
                                            <!--
    <tr  v-if="analysisValues[sample.name]!=undefined" v-for="chemicalValues in analysisValues[sample.name]['chemical'][chemical.description]">
                                        <td>{{ chemicalValues.Bezeichnun }}</td>
                                        <td>{{ chemicalValues.Rack }}</td>
                                        <td>{{ chemicalValues.Typ }}</td>
                                        <td>{{ chemicalValues.DalumUhrze }}</td>
                                        <td>{{ chemicalValues.ElementBezeichnun }}</td>
                                        <td>{{ chemicalValues.Einheit }}</td>
                                        <td>{{ chemicalValues.Intensity }}</td>
                                        </tr>
                                    -->
                                </template>

                                <tr class="primary">
                                        <th class="white--text"></th>
                                        <th class="white--text"></th>
                                        <th class="white--text"></th>
                                        <th class="white--text"></th>
                                        <th class="white--text"></th>
                                        <th class="white--text"></th>
                                        <th class="white--text"></th>
                                    </tr>
                                <template v-for="phisical in sample.phisicalAnalysis">
                                    <tr>
                                        <td>Phisical analysis</td>
                                        <td class="font-weight-light">{{ phisical.description }}</td>
                                        <td></td>
                                        <td class="font-weight-light"></td>
                                        <td class="font-weight-light"></td>
                                        <td class="font-weight-light"></td>
                                        <td class="font-weight-light"></td>
                                    </tr>
                                    <tr class="primary">
                                        <th class="white--text">Bezeichnun</th>
                                        <th class="white--text">Rack:Gefa</th>
                                        <th class="white--text">Typ</th>
                                        <th class="white--text">Dalum Uhrze</th>
                                        <th class="white--text">Element-Bezeichnun</th>
                                        <th class="white--text">Einheit</th>
                                        <th class="white--text">Intensity</th>
                                    </tr>
                                    <!--
                                    <tr v-if="analysisValues[sample.name]['phisical']!=undefined" v-for="phisicallValues in analysisValues[sample.name]['phisical'][phisical.description]">
                                        {{ phisicallValues }}
                                    </tr>

                                    -->

                                </template>


                            </tbody>
                        </template>
                    </v-simple-table>
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