<template>
    <v-container>
        <HeadersGeneralComponent>
            <template v-slot:title>
                History
            </template>
            <template v-slot:subtitle>
                <v-btn color="yellow" class="rounded-lg font-weight-bold" :to="`/analysis/history/${idAnalysis}/create`">
                    New history<v-icon>mdi-plus</v-icon>
                </v-btn>
            </template>
        </HeadersGeneralComponent>
        <v-row>
            <v-col class="col-12">
                <GeneralCardComponent>
                    <v-card-title class="primary">
                        <v-spacer></v-spacer>
                        <vue-excel-xlsx :data="items.data" :columns="excelColumns" :file-name="'filename'"
                            :file-type="'xlsx'" :sheet-name="'sheetname'">
                            <v-btn color="green" class="rounded-lg font-weight-bold white--text">Download <v-icon>
                                    mdi-file-excel</v-icon>
                            </v-btn>
                        </vue-excel-xlsx>
                    </v-card-title>
                    <v-data-table :headers="headers" :items="items.data"
                        hide-default-footer class="elevation-1">
                        <template v-slot:item.actions="{ item }">
                            <v-btn-toggle color="primary">
                                <v-btn color="yellow" small :to="`/analysis/history/${idAnalysis}/update/${item.id}`">
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
    import VueExcelXlsx from "vue-excel-xlsx";
    import Vue from "vue";

    Vue.use(VueExcelXlsx);

    export default {
        data() {
            return {
                idAnalysis:this.$route.params.id,
                headers: [{
                        text: 'recordCreateUser',
                        value: 'recordCreateUser'
                    },
                    {
                        text: 'mailFrom',
                        value: 'mailFrom'
                    },
                    {
                        text: 'Description',
                        value: 'Description'
                    },
                    {
                        text: 'Details',
                        value: 'Details'
                    },
                    {
                        text: 'Date',
                        value: 'Date'
                    },
                    {
                        text: 'Actions',
                        value: 'actions'
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

            }
        },
        created() {
            this.getHistory()
        },
        methods: {
            getHistory() {
                this.clients = []
                this.$axios.get('/histories/?populate=*', {
                    params: {
                        filters: {
                            analysis:this.idAnalysis
                        }
                    },
                    paramsSerializer: params => {
                        return qs.stringify(params, {
                            arrayFormat: 'brackets'
                        })
                    }

                }).then((response) => {
                    this.items = response.data
                })
            },
        },
        computed: {
            excelColumns() {
                return this.headers.map((item) => {
                    return {
                        label: item.text,
                        field: item.value
                    }
                })
            }
        }
    }
</script>