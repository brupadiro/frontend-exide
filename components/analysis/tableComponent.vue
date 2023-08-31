<template>
    <GeneralCardComponent flat>
        <v-data-table :items="itemsTable(sample.name,type,items.description)" calculate-widths
            :headers="items.headerTable" hide-default-footer>
            <template v-slot:body = "{items, headers}">
                <tr v-for="(item,index) in items" :key="`it`+index"> 
                    <td v-for="column in headers" class="text-center" :key="`cc`+column.id">
                        <span v-if="!column.ecuation_field">
                            {{ item[column.value] }}
                        </span>
                        <span v-else>{{ ecuationValue(item, column)}}</span>
                        
                    </td>
                    
                </tr>
                </template>
            <template v-slot:foot>
                <tr>
                    <td class="pa-2" v-for="column in items.headerTable" :key="`c${column.id}`">
                        <FormsFieldsTextComponent v-model="value[column.value]" placeholder="N/A" v-if="!column.ecuation_field">
                        </FormsFieldsTextComponent>
                    </td>
                </tr>
            </template>
        </v-data-table>
        <v-card-actions>
            <v-spacer></v-spacer>
            <FormsFieldsSelectComponent dense label-color="white--text" class="mb-2 mr-3"
                :items="comboInfo.listaLaboratory" v-model="value.laboratory" placeholder="Laboratory">
            </FormsFieldsSelectComponent>
            <v-btn color="yellow font-weight-bold black--text" class="rounded-lg"
                @click="saveItem(sample.id,items.id,type)">
                Add item</v-btn>
        </v-card-actions>
    </GeneralCardComponent>
</template>

<script>
    import * as math from 'mathjs'

    export default {
        props: {
            type: {
                type: String,
                required: true,
                default: ""
            },
            sample: {
                type: Object,
                required: true,
                default: {
                    function () {
                        return {}
                    }
                }
            },
            items: {
                type: Object,
                required: true,
                default: {
                    function () {
                        return {}

                    }
                },
                validator(value) {
                    value.headerTable = value.headerTable.map(item => {
                        return {
                            ...item,
                            value: item.text.replace(" ", "_"),
                        }
                    });
                    return true;
                }
            },
            values: {
                type: Object,
                required: true
            },
            comboInfo: {
                type: Object,
                required: true,
                default: {
                    function () {
                        return {}
                    }

                }

            }
        },
        data() {
            return {
                propItems:this.items,
                value: {},
            }
        },
        methods: {
            itemsTable(sampleName, type, item) {
                if (this.values[sampleName]) console.log(this.values[sampleName][type])
                if (this.values && this.values[sampleName] && this.values[sampleName][type] &&
                    this.values[sampleName][type][item] !== undefined) {
                    return this.values[sampleName][type][item].data.map((item) => {
                        return {
                            ...item.row
                        }
                    });
                }
                return [];
            },

            headersTable(sampleName, type, item) {
                if (this.values[sampleName]) console.log(this.values[sampleName][type])
                if (this.values && this.values[sampleName] && this.values[sampleName][type] &&
                    this.values[sampleName][type][item] !== undefined) {
                    return this.values[sampleName][type][item].headers.map((item) => {
                        return {
                            ...item,
                            value: item.text.replace(" ", "_"),
                        }
                    });
                }
                return [];
            },
            ecuationValue(item, column){

                let letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

                let nuevoDatos = Object.keys(item).reduce((obj, clave, i) => {
                let nuevaClave = letras[i] + '1';
                obj[nuevaClave] = item[clave];
                return obj;
                }, {});
                if(Object.keys(nuevoDatos).length>0) {
                    let resultado = math.evaluate(this.items.ecuation, nuevoDatos);
                return resultado

                } else {
                    return 0
                }
            },
            
            async saveItem(sample, normative, type) {
                await this.$axios.post('/analysis-values', {
                    data: {
                        sample: sample,
                        type: type,
                        normative_step: normative,
                        analysis: this.$route.params.id,
                        row: {
                            ...this.value
                        }
                    }
                })
                this.value = {}
                this.$root.$emit('getValues')
            }


        }
    }
</script>

<style>

</style>