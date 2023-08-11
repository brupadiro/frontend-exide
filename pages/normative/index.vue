<template>
    <v-container fluid>
        <HeadersGeneralComponent>
            <template v-slot:title>
                Normatives
            </template>
            <template v-slot:subtitle>
                <v-btn color="yellow" class="rounded-lg font-weight-bold" @click="normativeDialog = true">
                    New<v-icon>mdi-plus</v-icon>
                </v-btn>
            </template>
        </HeadersGeneralComponent>

        <v-row>
            <v-col class="col-12">
                <GeneralCardComponent>
                    <v-toolbar dense color="primary" elevation="0"></v-toolbar>
                    <v-data-table hide-default-footer :headers="headers" :items="normativeItems.data">
                        <template v-slot:item.RecordCreateUser>
                            admin@ensayobaterias.net
                        </template>

                        <template v-slot:[`item.Actions`]="{ item }">
                            <v-btn-toggle>
                                <v-btn color="yellow" class="black--text font-weight-bold"
                                    :to="`/normative/normativeSteps/${item.id}`" small>
                                    Ver
                                </v-btn>
                                <v-btn color="red" class="white--text font-weight-bold" @click="deleteNormative(item.id)" small>
                                    <v-icon>mdi-delete</v-icon>
                                </v-btn>
                            </v-btn-toggle>
                        </template>
                    </v-data-table>

                </GeneralCardComponent>
            </v-col>
        </v-row>
        <v-dialog v-model="normativeDialog" persistent max-width="600">
            <GeneralCardComponent v-model="normativeDialog">
                <GeneralCardTitleComponent>Create normative
                    <v-spacer></v-spacer>
                    <v-btn icon @click="normativeDialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </GeneralCardTitleComponent>
                <v-divider></v-divider>
                <v-card-text>
                    <v-row>
                        <v-col class="col-12">
                            <FormsFieldsTextComponent label="Normative" v-model="normative.name">
                            </FormsFieldsTextComponent>
                        </v-col>
                        <v-col class="col-12">
                            <FormsFieldsSelectComponent :items="[{text:'Quimico',value:'Chemical'},{text:'Fisico',value:'Phisical'}]" label="Type" v-model="normative.type">
                            </FormsFieldsSelectComponent>
                        </v-col>
                        <v-col class="col-12">
                            <FormsFieldsTextComponent label="Initials" v-model="normative.initials">
                            </FormsFieldsTextComponent>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="yellow" class="rounded-lg font-weight-black" @click="createNormative()">Create
                        normative</v-btn>
                </v-card-actions>
            </GeneralCardComponent>
        </v-dialog>
    </v-container>
</template>
<script>
    import itemTableComponent from '@/components/chemicalAnalysis/itemTableComponent.vue'
    export default {
        data() {
            return {
                normativeDialog: false,
                normative: {
                    type:'Chemical'
                },
                headers: [{
                        value: 'id',
                        text: 'ID'
                    },
                    {
                        value: 'name',
                        text: 'Normative'
                    },
                    {
                        value: 'type',
                        text: 'type'
                    },
                    {
                        value: 'initials',
                        text: 'Initials'
                    },
                    {
                        value: 'RecordCreateUser',
                        text: 'RecordCreateUser'
                    },
                    {
                        value: 'createdAt',
                        text: 'RecordCreateDate'
                    }, {
                        value: 'Actions',
                        text: 'Actions'
                    }
                ],
                normativeItems: {
                    data: []
                }
            }
        },
        components: {
            itemTableComponent
        },
        name: 'indexPage',
        created() {
            this.getNormatives()
        },
        methods: {
            addSample() {
                this.analysis.samples.push('')
                this.$forceUpdate()
            },
            removeSample() {
                this.analysis.samples.splice(this.analysis.samples.length - 1, 1)
            },
            setChemicalAnalysis(value, index) {
                this.analysis.chemicalAnalysis[index] = value
                console.log(this.analysis.chemicalAnalysis)
            },
            createNormative() {
                this.$axios.post('/normatives', {
                        data: this.normative
                    })
                    .then(response => {
                        this.normativeDialog = false
                        this.getNormatives()
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            deleteNormative(id) {
                this.$axios.delete('/normatives/'+id)
                    .then(response => {
                        this.getNormatives()
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            getNormatives() {
                this.$axios.get('/normatives')
                    .then(response => {
                        this.normativeItems = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
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