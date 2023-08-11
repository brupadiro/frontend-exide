<template>
    <v-container fluid>
        <HeadersGeneralComponent>
            <template v-slot:title>
                Normative Steps
            </template>
            <template v-slot:subtitle>
                <v-btn color="yellow" class="rounded-lg font-weight-bold" @click="stepDialog = true">
                    New<v-icon>mdi-plus</v-icon>
                </v-btn>
            </template>


        </HeadersGeneralComponent>
        <GeneralCardComponent>
            <v-toolbar dense color="primary" elevation="0"></v-toolbar>
            <v-data-table hide-default-footer :headers="headers" :items="items.data">
                <template v-slot:[`item.Actions`]="{ item }">
                    <v-btn color="yellow" class="black--text font-weight-bold" :to="`/normative/normativeStepFields/${item.id}`"
                        small>
                        Opciones
                    </v-btn>
                </template>
            </v-data-table>
        </GeneralCardComponent>
        <v-dialog v-model="stepDialog" width="700">
            <GeneralCardComponent>
                <v-toolbar color="primary" dense>
                    <v-toolbar-title class="white--text">Agregar step</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="stepDialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-card-text class="py-3">
                    <FormsFieldsTextComponent label="Description" v-model="step.description" dense  required></FormsFieldsTextComponent>
                    <FormsFieldsTextComponent label="Order" v-model="step.order" dense  required></FormsFieldsTextComponent>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="yellow rounded-lg font-weight-bold" @click="createStep()">Agregar step</v-btn>
                </v-card-actions>
            </GeneralCardComponent>
        </v-dialog>
    </v-container>
</template>

<script>
    export default {
        name: 'normativeStepsPage',
        data() {
            return {
                stepDialog: false,
                items: {
                    data:[]
                },
                step: {
                    description: '',
                    order: 1,
                    normatives:[]
                },
                headers: [{
                        value: 'id',
                        text: 'ID'
                    },
                    {
                        value: 'description',
                        text: 'Description'
                    },
                    {
                        value: 'order',
                        text: 'Order'
                    }, {
                        value: 'Actions',
                        text: 'Actions',
                        align: 'right'
                    }
                ]
            }
        },
        created() {
            this.getSteps()
        },
        methods: {
            getSteps() {
                this.$axios.get('/normative-steps/?filters[normative]='+this.$route.params.id)
                    .then((response) => {
                        this.items = response.data
                    })
            },
            createStep() {
                this.step.normative=this.$route.params.id
                this.$axios.post('/normative-steps', {
                        data: this.step
                    })
                    .then(() => {
                        this.getSteps()
                    })

                this.stepDialog = false
            }
        }
    };
</script>