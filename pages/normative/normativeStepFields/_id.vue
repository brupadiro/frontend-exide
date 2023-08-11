<template>
    <v-container fluid>
        <HeadersGeneralComponent>
            <template v-slot:title>
                Normative analysis field
            </template>
            <template v-slot:subtitle>
                <v-btn color="yellow" class="rounded-lg font-weight-bold" @click="normativeTableDialog = true">
                    New column<v-icon>mdi-plus</v-icon>
                </v-btn>
            </template>
        </HeadersGeneralComponent>
        <v-row>
            <v-col class="col-12">
                <GeneralCardComponent>
                    <v-toolbar dense color="primary" elevation="0"></v-toolbar>
           <v-data-table hide-default-footer :headers="computedHeaders" :items="items" item-key="id">
                        <template v-slot:item.sample="{ item }">
                            <v-select label="Sample" v-model="normativeStep.sample" :items="samplesList.data" item-text="name" item-value="id"></v-select>
                        </template>

                        <template v-slot:[`item.${header.value}`]="{ item }" v-for="(header,index) in headersTable">
                            <div style="height:40px" @click="selectItem(item,index)" v-if="!header.ecuation_field" :key="index">{{ item[header.value] }}</div>
                            <v-text-field v-else  :key="'f'+index" v-model="normativeStep.ecuation" hide-details :filled="item.readOnly"
                                :readonly="item.readOnly" style="width:120px" dense></v-text-field>
                        </template>
                        <template v-slot:item.save="{ item }">
                            <v-btn small color="info" @click="saveEcuation()">Save</v-btn>
                        </template>

                    </v-data-table>
                </GeneralCardComponent>

            </v-col>
        </v-row>

        <v-dialog v-model="normativeTableDialog" persistent max-width="600">
            <GeneralCardComponent >
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
                            <FormsFieldsTextComponent :rules="rules.required" label="Nombre de la columna" v-model="headerInfo.text">
                            </FormsFieldsTextComponent>
                        </v-col>
                        <v-col class="col-12">
                            <FormsFieldsTextComponent  :rules="rules.required" v-if="!headerInfo.ecuation_field" label="Valor" v-model="headerInfo.value" type="number">
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
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                rules: {
                    required: [value => !!value || 'Required.'],
                },
                headerInfo:{},
                items: [],
                selectedItems: [],
                saveDialog: false,
                normativeTableDialog:false,
                normativeStep:{
                    normative:'',
                    headerTable:[]
                },
                headersTable:[],
                samplesList:{
                    data:[]
                }
            }
        },
        created(){
            this.getNormative()
            this.getSamples()
        },
        methods: {
            getSamples() {
                this.$axios.get(`/samples/?populate=*`)
                    .then((data)=>{
                        this.samplesList = data.data
                    })

            },
            getNormative() {
                this.$axios.get(`/normative-steps/${this.$route.params.id}/?populate=*`)
                    .then((data)=>{
                        this.normativeStep = data.data.data
                        const normativeStep = JSON.parse(JSON.stringify(this.normativeStep))
                        const headerTable = normativeStep.headerTable.map((item)=>{
                            return {
                                ...item,
                                value:item.text.replace(" ","_"),
                            }
                        })
                        const result = {};
                        this.normativeStep.headerTable.forEach(item => {
                        console.log(item)
                            result[item.text.replace(" ","_")] = item.value;
                        });
                        console.log(result)
                        this.items = [result]
                        this.headersTable =headerTable 
                        
                    })
            },
            saveHeader() {
                if(!this.$refs.form.validate()) return
                this.normativeStep.headerTable.push(this.headerInfo)
                this.$axios.put(`/normative-steps/${this.$route.params.id}`,{
                    data:this.normativeStep
                })
                    .then((data)=>{
                        this.normativeTableDialog = false
                        this.headerInfo = {}
                        this.getNormative()
                    })
            },
            saveEcuation() {
                this.$axios.put(`/normative-steps/${this.$route.params.id}`,{
                    data:this.normativeStep
                })
                    .then((data)=>{
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
                console.log(item,number)
                this.normativeStep.ecuation =(this.normativeStep.ecuation)?this.normativeStep.ecuation  + letter:letter
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
        },
        computed:{
            computedHeaders() {
                return [
                    {text:'Sample',value:'sample',ecuation_field:false,readOnly:true},
                    ...this.headersTable,{text:'save',value:'save'}
                ]
            }
        }
    }
</script>