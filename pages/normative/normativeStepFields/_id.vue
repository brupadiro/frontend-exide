<template>
    <v-container fluid>
        <HeadersGeneralComponent>
            <template v-slot:title>
                Normative analysis field
            </template>
            <template v-slot:subtitle>
                <v-btn-toggle>
                    <v-btn color="yellow" small class="font-weight-bold" @click="normativeTableDialog = true">
                        New column<v-icon>mdi-plus</v-icon>
                    </v-btn>
                    <v-btn color="blue" small class="font-weight-bold"
                        @click="editNormativeDialog = true;editNormative= normativeStep">
                        Edit<v-icon>mdi-pencil</v-icon>
                    </v-btn>

                </v-btn-toggle>
            </template>
        </HeadersGeneralComponent>
        <v-row>
            <v-col class="col-12">
                <GeneralCardComponent>
                    <v-toolbar dense color="primary" elevation="0"></v-toolbar>
                    <v-data-table hide-default-footer :headers="computedHeaders" :items="items" item-key="id">
                        <template v-slot:item.sample="{ item }">
                            <v-select label="Sample" v-model="normativeStep.sample" :items="samplesList.data"
                                item-text="name" item-value="id"></v-select>
                        </template>

                        <template v-slot:[`item.${header.value}`]="{ item }" v-for="(header,index) in headersTable">
                            <div style="height:40px" @click="selectItem(item,index)" v-if="!header.ecuation_field"
                                :key="index">{{ item[header.value] }}</div>
                            <v-text-field v-else :key="'f'+index" v-model="normativeStep.ecuation" hide-details
                                :filled="item.readOnly" :readonly="item.readOnly" style="width:120px" dense>
                            </v-text-field>
                        </template>
                        <template v-slot:item.save="{ item }">
                            <v-btn small color="info" @click="saveEcuation()">Save</v-btn>
                        </template>

                    </v-data-table>
                </GeneralCardComponent>

            </v-col>
        </v-row>

        <v-dialog v-model="normativeTableDialog" persistent max-width="600">
            <GeneralCardComponent>
                <GeneralCardTitleComponent>Add column
                    <v-spacer></v-spacer>
                    <v-btn icon @click="normativeTableDialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </GeneralCardTitleComponent>
                <v-divider></v-divider>
                <v-card-text>
                    <v-form ref="form">

                        <v-row>
                            <v-col class="col-12">
                                <FormsFieldsTextComponent :rules="rules.required" label="Nombre de la columna"
                                    v-model="headerInfo.text">
                                </FormsFieldsTextComponent>
                            </v-col>

                            <v-col class="col-12">
                                <v-checkbox label="Campo de ecuacion" v-model="headerInfo.ecuation_field">
                                </v-checkbox>
                            </v-col>

                        </v-row>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="yellow" class="rounded-lg font-weight-black" @click="saveHeader()">Agregar</v-btn>
                </v-card-actions>
            </GeneralCardComponent>
        </v-dialog>


        <v-dialog v-model="saveDialog" width="300">
            <v-card width="300" height="200" class="d-flex justify-center align-center flex-column">
                <v-icon color="success" size="80">mdi-check-circle</v-icon>
                <h2 class="text-center">Equation saved successfully</h2>
                <v-card-actions>
                    <v-btn color="info" @click="saveDialog = false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>


        <v-dialog v-model="editNormativeDialog" persistent max-width="600">
            <GeneralCardComponent>
                <GeneralCardTitleComponent>Edit normative
                    <v-spacer></v-spacer>
                    <v-btn icon @click="editNormativeDialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </GeneralCardTitleComponent>
                <v-divider></v-divider>
                <v-card-text>
                    <v-form ref="form">
                        <v-row>
                            <v-col class="col-12">
                                <FormsFieldsTextComponent :rules="rules.required" label="Nombre de la normativa"
                                    v-model="editNormative.description">
                                </FormsFieldsTextComponent>
                            </v-col>
                            <v-col class="col-12">
                                <v-list>
                                    <v-list-item v-for="(header,index) in editNormative.headerTable"
                                        :key="`index-${index}`">
                                        <v-list-item-content>
                                            <v-list-item-title class="py-4">
                                                <v-input hide-details style="width:100%">
                                                    <v-text-field  label="Nombre de la normativa"
                                                        v-model="header.text"></v-text-field>
                                                    <v-btn icon color="red" class="py-4" @click="deleteHeader(header)">
                                                        <v-icon>mdi-delete</v-icon>
                                                    </v-btn>
                                                </v-input>
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-col>


                        </v-row>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="yellow" class="rounded-lg font-weight-black" @click="updateNormative()">Actualizar normativa</v-btn>
                </v-card-actions>
            </GeneralCardComponent>
        </v-dialog>



    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                rules: {
                    required: [value => !!value || 'Required.'],
                },
                headerInfo: {},
                items: [],
                selectedItems: [],
                saveDialog: false,
                normativeTableDialog: false,
                normativeStep: {
                    normative: '',
                    headerTable: []
                },
                headersTable: [],
                samplesList: {
                    data: []
                },
                editNormativeDialog: false,
                editNormative: {}
            }
        },
        created() {
            this.getNormative()
            this.getSamples()
        },
        methods: {
            getSamples() {
                this.$axios.get(`/samples/?populate=*`)
                    .then((data) => {
                        this.samplesList = data.data
                    })

            },
            getNormative() {
                this.$axios.get(`/normative-steps/${this.$route.params.id}/?populate=*`)
                    .then((data) => {
                        this.normativeStep = data.data.data
                        const normativeStep = JSON.parse(JSON.stringify(this.normativeStep))
                        const headerTable = normativeStep.headerTable.map((item) => {
                            return {
                                ...item,
                                value: item.text.replace(" ", "_"),
                            }
                        })
                        const result = {};
                        this.normativeStep.headerTable.forEach(item => {
                            console.log(item)
                            result[item.text.replace(" ", "_")] = item.value;
                        });
                        console.log(result)
                        this.items = [result]
                        this.headersTable = headerTable

                    })
            },
            saveHeader() {
                if (!this.$refs.form.validate()) return
                this.normativeStep.headerTable.push(this.headerInfo)
                this.$axios.put(`/normative-steps/${this.$route.params.id}`, {
                        data: this.normativeStep
                    })
                    .then((data) => {
                        this.normativeTableDialog = false
                        this.headerInfo = {}
                        this.getNormative()
                    })
            },
            saveEcuation() {
                this.$axios.put(`/normative-steps/${this.$route.params.id}`, {
                        data: this.normativeStep
                    })
                    .then((data) => {
                        this.saveDialog = true
                    })
            },
            selectItem(item, number) {
                //number to letter 
                var letters = ['A1', 'B1', 'C1', 'D1', 'E1'];
                var letter = letters[number];
                const findIndex = this.items.findIndex((selectedItem) => {
                    return selectedItem.id === item.id
                })
                console.log(item, number)
                this.normativeStep.ecuation = (this.normativeStep.ecuation) ? this.normativeStep.ecuation + letter :
                    letter
            },
            saveItem(item) {
                const findIndex = this.items.findIndex((selectedItem) => {
                    return selectedItem.id === item.id
                })
                this.items[findIndex].readOnly = true
                this.saveDialog = true

            },
            calculateTotal() {
                let total = 0
                this.selectedItems.forEach((item) => {
                    total += item.valor
                })
                return total
            },
            deleteHeader(header){
                const findIndex = this.normativeStep.headerTable.findIndex((selectedItem) => {
                    return selectedItem.text === header.text
                })
                this.normativeStep.headerTable.splice(findIndex,1)
                console.log(this.normativeStep.headerTable)
                return
                this.$axios.put(`/normative-steps/${this.$route.params.id}`, {
                        data: this.normativeStep
                    })
                    .then((data) => {
                        this.normativeTableDialog = false
                        this.headerInfo = {}
                        this.getNormative()
                    })
            },
            updateNormative(){
                let confirmUpdate = window.confirm('¿Estás seguro que deseas actualizar este elemento?');
                if(!confirmUpdate) return
                this.$axios.put(`/normative-steps/${this.$route.params.id}`, {
                        data: this.editNormative
                    })
                    .then((data) => {
                        this.editNormativeDialog = false
                        this.getNormative()
                    })
            }
        },
        computed: {
            computedHeaders() {
                return [
                    ...this.headersTable, {
                        text: 'save',
                        value: 'save'
                    }
                ]
            }
        }
    }
</script>