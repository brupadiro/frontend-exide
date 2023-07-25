<template>
    <v-container>
        <HeadersGeneralComponent>
            <template v-slot:title>
                Location
            </template>
            <template v-slot:subtitle>
                <v-btn color="yellow" class="rounded-lg font-weight-bold" to="/location/create">
                    New<v-icon>mdi-plus</v-icon>
                </v-btn>
            </template>
        </HeadersGeneralComponent>
        <v-row>
            <v-col class="col-12">
                <GeneralCardComponent>
                    <v-card-title dense class="primary" :elevation="0">
                        <v-row>
                            <v-col class="col-md-5 col-12">
                                <FormsFieldsSelectComponent dense v-model="search.laboratory.$contains" label-color="white--text"
                                    :items="comboInfo.listaPlant" label="Laboratory"></FormsFieldsSelectComponent>
                            </v-col>
                            <v-col class="col-md-5 col-12">
                                <FormsFieldsSelectComponent dense label-color="white--text" v-model="search.typology.$contains" :items="listaTipology"
                                    label="Tipology"></FormsFieldsSelectComponent>
                            </v-col>
                            <v-col class="col-md-2">
                                <v-btn color="yellow" @click="getPromotions()" block class="rounded-lg font-weight-bold mt-7">
                                    Search&nbsp;<v-icon>mdi-magnify</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-title>
                    <v-data-table :headers="headers" hide-default-footer disable-sort :items="items.data">
                        <template v-slot:item.capacity="{ item }">
                            {{ item.capacity }} %
                        </template>


                        <template v-slot:item.actions="{ item }">
                            <v-btn-toggle color="primary">
                                <v-btn color="yellow" :to="`/Location/edit/${item.id}`">
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
    import exideJson from '~/static/exide.json'
    export default {
        data() {
            return {
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
                comboInfo: {
                    listaLaboratory: [],
                    listaPlant: [],
                    listaRequestor: [],
                    listaLabTechnician: [],
                    listaStatus: []

                },
                items: {
                    data: []
                },
                search:{
                    laboratory:{
                        $contains:''
                    },
                    typology:{
                        $contains:''
                    }
                },
                listaTipology: ['','Circuit', 'Bath', 'Fridge', 'Vibration', 'Warehouse', 'Other']


            }
        },
        created() {
            this.getPromotions()
            this.getComboInfo()
        },
        methods: {
            getPromotions() {
                this.items = {}
                this.$axios.get('/locations/', {
                    params: {
                        filters:this.search
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