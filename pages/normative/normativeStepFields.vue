<template>
    <v-container fluid>
        <HeadersGeneralComponent>
            <template v-slot:title>
                Normative analysis field
            </template>
        </HeadersGeneralComponent>
        <v-row>
            <v-col class="col-12">
                <GeneralCardComponent>
                    <v-toolbar dense color="primary" elevation="0"></v-toolbar>
           <v-data-table hide-default-footer :headers="headers" :items="items" item-key="id">
                        <template v-slot:item.sample="{ item }">
                            {{ item.sample }}
                        </template>

                        <template v-slot:item.massg1="{ item }">
                            <div style="height:40px" @click="selectItem(item,'A1')">{{ item.massg1 }}</div>
                        </template>
                        <template v-slot:item.h3PO41="{ item }">
                            <div style="height:40px" @click="selectItem(item,'B1')">{{ item.h3PO41 }}</div>
                        </template>
                        <template v-slot:item.H2SO41="{ item }">
                            <div style="height:40px" @click="selectItem(item,'C1')">{{ item.H2SO41 }}</div>
                        </template>
                        <template v-slot:item.massg2="{ item }">
                            <div style="height:40px" @click="selectItem(item,'D1')">{{ item.massg2 }}</div>
                        </template>
                        <template v-slot:item.h3PO4C="{ item }">
                            <v-text-field v-model="item.h3PO4C" hide-details :filled="item.readOnly"
                                :readonly="item.readOnly" style="width:120px" dense></v-text-field>
                        </template>
                        <template v-slot:item.save="{ item }">
                            <v-btn small color="info" @click="saveItem(item)">Save</v-btn>
                        </template>

                    </v-data-table>
                </GeneralCardComponent>

            </v-col>
        </v-row>
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
                headers: [{
                        text: 'SAMPLE',
                        value: 'sample'
                    },
                    {
                        text: 'Mass (g)',
                        value: 'massg1'
                    },
                    {
                        text: 'h3PO4 %',
                        value: 'h3PO41'
                    },
                    {
                        text: 'H2SO4 %',
                        value: 'H2SO41'
                    },
                    {
                        text: 'Mass (g)',
                        value: 'massg2'
                    },
                    {
                        text: 'h3PO4 %',
                        value: 'h3PO4C'
                    },
                    {
                        text: 'SAVE',
                        value: 'save'
                    },


                ],
                items: [{
                    id: 1,
                    sample: 'Sample 1',
                    h3PO4C: '=',
                    massg1: '3',
                    h3PO41: '12',
                    H2SO41: '15',
                    massg2: '30',
                    readOnly: false
                }, {
                    id: 2,
                    sample: 'Sample 2',
                    h3PO4C: '=',
                    massg1: '15',
                    h3PO41: '14',
                    H2SO41: '32',
                    massg2: '30',
                    readOnly: false
                }, ],
                selectedItems: [],
                saveDialog: false
            }
        },
        methods: {
            selectItem(item, value) {
                const findIndex = this.items.findIndex((selectedItem) => {
                    return selectedItem.id === item.id
                })
                console.log(findIndex)
                this.items[findIndex].h3PO4C = this.items[findIndex].h3PO4C + value
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
    }
</script>