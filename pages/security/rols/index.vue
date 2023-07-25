<template>
    <v-container>
        <HeadersGeneralComponent>
            <template v-slot:title>
                Rol
            </template>
        </HeadersGeneralComponent>
        <v-row>
            <v-col class="col-12">
                <GeneralCardComponent>
                    <v-card-title dense class="primary" :elevation="0">
                    </v-card-title>
                    <v-data-table :headers="headers" hide-default-footer disable-sort :items="items.data">


                        <template v-slot:item.actions="{ item }">
                            <v-btn-toggle color="primary">
                                <v-btn color="yellow" :to="`/security/rols/edit/${item.id}`">
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
    export default {
        data() {
            return {
                headers: [{
                        text: 'Id',
                        value: 'id'
                    },
                    {
                        text: 'Name',
                        value: 'name'
                    },
                    {
                        text: 'Actions',
                        value: 'actions',
                        align:'right'
                    },
                ],
                comboInfo: {
                    listaLaboratory: [],
                    listaPlant: [],
                    listaRequestor: [],
                    listaLabTechnician: [],
                    listaStatus: []

                },
                items:{
                    data:[]
                },


            }
        },
        created() {
            this.getRols()
        },
        methods: {
            getRols() {
                this.items = []
                this.$axios.get('/rols', ).then((response) => {
                    this.items = response.data
                })
            },
        }
    }
</script>