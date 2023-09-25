<template>
    <v-container fluid>
        <HeadersGeneralComponent>
            <template v-slot:title>
                Users
            </template>
            <template v-slot:subtitle>
                <v-btn color="yellow" class="rounded-lg font-weight-bold" to="/security/users/create">
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
                                <FormsFieldsTextComponent dense v-model="search.name" label-color="white--text"
                                    label="name"></FormsFieldsTextComponent>
                            </v-col>
                            <v-col class="col-md-5 col-12">
                                <FormsFieldsTextComponent dense  v-model="search.position"  label-color="white--text"
                                    label="Position"></FormsFieldsTextComponent>
                            </v-col>
                            <v-col class="col-md-2">
                                <v-btn color="yellow" block class="rounded-lg font-weight-bold mt-7" @click="getUsers()">
                                    Search&nbsp;<v-icon>mdi-magnify</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-title>
                    <v-data-table :headers="headers" hide-default-footer disable-sort :items="items">


                        <template v-slot:item.actions="{ item }">
                            <v-btn-toggle color="primary">
                                <v-btn color="yellow" :to="`/security/users/edit/${item.id}`">
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
                        text: 'Position',
                        value: 'position'
                    },
                    {
                        text: 'Email',
                        value: 'username'
                    },
                    {
                        text: 'Phone',
                        value: 'phone'
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
                search:{
                    name:undefined,
                    position:undefined
                },
                items:[],


            }
        },
        created() {
            this.getUsers()
        },
        methods: {
            getUsers() {
                this.items = []
                if(this.search.name == "")
                    this.search.name = undefined
                if(this.search.position == "")
                    this.search.position = undefined
                this.$axios.get('/users', {
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
        }
    }
</script>