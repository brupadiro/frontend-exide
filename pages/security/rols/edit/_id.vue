<template>
    <v-container>
        <HeadersGeneralComponent>
            <template v-slot:title>
                {{ rol.name }}
            </template>
        </HeadersGeneralComponent>
        <v-row>
            <v-col class="col-12">
                <GeneralCardComponent>
                    <GeneralCardTitleComponent>Menus</GeneralCardTitleComponent>
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-row no-gutters>
                            <v-col class="col-12 py-3" v-for="menu in rol.menus" :key="menu.id">
                                <v-checkbox hide-details v-model="menu.active" :label="menu.name"></v-checkbox>
                                <v-checkbox class="pl-4" v-for="subMenu in menu.menus" hide-details
                                    v-model="subMenu.active" :label="subMenu.name" :key="subMenu.id"></v-checkbox>
                            </v-col>
                        </v-row>

                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="updateRol()" color="yellow" class="font-weight-bold rounded-lg">Guardar
                        </v-btn>
                    </v-card-actions>
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
                        align: 'right'
                    },
                ],
                comboInfo: {
                    listaLaboratory: [],
                    listaPlant: [],
                    listaRequestor: [],
                    listaLabTechnician: [],
                    listaStatus: []

                },
                rol: {},
                items: {
                    data: []
                },


            }
        },
        created() {
            this.getRol()
        },
        methods: {
            getRol() {
                this.items = []
                const id = this.$route.params.id
                this.$axios.get(`/rols/${id}/?populate=*,menus.menus`, ).then((response) => {
                    this.rol = response.data.data
                })
            },
            updateRol() {
                const id = this.$route.params.id
                this.rol.menus.forEach(async menu => {
                    await this.$axios.put(`/menus/${menu.id}/?populate=*`, {data:menu}).then((response) => {
                   menu.menus.forEach(async subMenu => {
                        await this.$axios.put(`/menus/${subMenu.id}/?populate=*`, {data:subMenu}).then((response) => {
                        })
                    })
                })
                });
            }
        }
    }
</script>