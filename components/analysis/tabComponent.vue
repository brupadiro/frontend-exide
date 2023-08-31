<template>
    <v-tab-item>
        <v-card-text>
            <v-card outlined>
                <v-tabs v-model="tab" bg-color="yellow" active-class="active-tab">
                    <v-tab class="font-weight-bold" v-for="item in analysis"
                        :key="item.id">
                        <v-menu bottom>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn color="yellow" text v-bind="attrs" v-on="on">
                                    {{ item.description }}<v-icon class="white rounded-md ml-2" color="black">
                                        mdi-chevron-down</v-icon>
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item
                                    @click="()=>{historicoModal = true;historialAnalysis = itemsTable(sample.name,'chemical',item.description)}">
                                    <v-list-item-title>Historico</v-list-item-title>
                                </v-list-item>

                            </v-list>
                        </v-menu>

                    </v-tab>
                </v-tabs>
                <v-card-text>
                    <v-tabs-items v-model="tab">
                        <v-tab-item v-for="item in analysis" :key="item.id">
                            <analysisTableComponent :comboInfo="comboInfo" :items="item"
                                :values="analysisValues" :sample="sample" :type="type"></analysisTableComponent>
                        </v-tab-item>
                    </v-tabs-items>
                </v-card-text>
            </v-card>
        </v-card-text>
    </v-tab-item>

</template>

<script>
    export default {
        props:{
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
                tab:0
            }
        },
        computed:{
            analysis() {
                if(this.type == 'phisical'){
                    return this.sample.phisicalAnalysis
                }else{
                    return this.sample.chemicalAnalysis
                }
            }
        }
    }
</script>

<style>

</style>