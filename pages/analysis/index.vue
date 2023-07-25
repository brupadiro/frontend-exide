<template>
    <v-container>
        <HeadersGeneralComponent>
            <template v-slot:title>
                Analysis Request
            </template>
            <template v-slot:subtitle>
                <v-btn color="yellow" class="rounded-lg font-weight-bold" to="/analysis/create">
                    New<v-icon>mdi-plus</v-icon>
                </v-btn>
            </template>
        </HeadersGeneralComponent>
        <v-row>
            <v-col class="col-12">
                <GeneralCardComponent>
                    <v-card-title dense class="primary" :elevation="0">
                        <v-row>
                            <v-col class="col-md-10 col-12">
                                <v-row>
                                    <v-col>
                                        <FormsFieldsSelectComponent dense label-color="white--text"
                                            :items="comboInfo.listaLaboratory" v-model="search.laboratory.$contains"
                                            label="Laboratory">
                                        </FormsFieldsSelectComponent>
                                    </v-col>
                                    <v-col>
                                        <FormsFieldsSelectComponent dense label-color="white--text"
                                            :items="comboInfo.listaRequestor" v-model="search.requestor.$contains"
                                            label="Requestor">
                                        </FormsFieldsSelectComponent>
                                    </v-col>
                                    <v-col>
                                        <FormsFieldsSelectComponent dense label-color="white--text"
                                            :items="comboInfo.listaLabTechnician" v-model="search.techinician.$contains"
                                            label="Lab technician">
                                        </FormsFieldsSelectComponent>
                                    </v-col>
                                    <v-col>
                                        <FormsFieldsTextComponent type="date" dense v-model="search.expectedDate.$gte"
                                            label-color="white--text" label="From">
                                        </FormsFieldsTextComponent>
                                    </v-col>
                                    <v-col>
                                        <FormsFieldsTextComponent type="date" dense v-model="search.expectedDate.$lte"
                                            label-color="white--text" label="to">
                                        </FormsFieldsTextComponent>
                                    </v-col>

                                </v-row>
                            </v-col>
                            <v-col class="col-md-2">
                                <v-btn color="yellow" block class="rounded-lg font-weight-bold mt-7">
                                    Search&nbsp;<v-icon>mdi-magnify</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-title>
                    <v-data-table :headers="headers" @click:row="showRawData($event)" :items="items.data"
                        hide-default-footer class="elevation-1">
                        <template v-slot:item.actions="{ item }">
                            <v-btn-toggle color="primary">
                                <v-btn color="yellow" :to="`/analysis/edit/${item.id}`">
                                    <v-icon>mdi-eye</v-icon>
                                </v-btn>
                            </v-btn-toggle>
                        </template>
                    </v-data-table>
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
    export default {
        data() {
            return {
                exideJson: exideJson,
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
                    {
                        text: 'Actions',
                        value: 'actions'
                    },
                ],
                search: {
                    laboratory: {
                        $contains: ''
                    },
                    requestor: {
                        $contains: ''
                    },
                    techinician: {
                        $contains: ''
                    },
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

            }
        },
        created() {
            this.search.expectedDate.$gte = moment().subtract(2, 'years').format('YYYY-MM-DD')
            this.search.expectedDate.$lte = moment().add(50, 'years').format('YYYY-MM-DD')
            this.getComboInfo()
            this.getAnalysis()
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
            getAnalysis() {
                this.clients = []
                this.$axios.get('/analyses/?populate=*', {
                    paramsSerializer: params => {
                        return qs.stringify(params, {
                            arrayFormat: 'brackets'
                        })
                    }

                }).then((response) => {
                    this.items = response.data
                })
            },
            showRawData($e) {
                this.$router.push(`/analysis/rawdata/${$e.id}`)
            }
        }
    }
</script>