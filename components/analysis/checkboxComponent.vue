<template>
    <div>
        <div v-if="getSecondaryNormativeStepsFromSameNormative.length>0">
            <v-checkbox readonly :label="normative.description" :input-value="localValue"
                class="font-weight-bold black--text"></v-checkbox>
            <v-select flat label="Select an option" v-model="localValue" clearable
                :items="getSecondaryNormativeStepsFromSameNormative" dense item-text="description"
                item-value="id">
            </v-select>
        </div>
        <div v-else>
            <v-checkbox :label="normative.description" :value="normative.id" v-model="localValue"
                class="font-weight-bold black--text">
            </v-checkbox>

        </div>
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                type: Array,
                required: true
            },
            normative: {
                type: Object,
                required: true
            },
            normativeItems: {
                type: Array,
                required: true
            },
        },
        data() {
            return {
                localValue: this.value, // Inicializa la variable local con el valor de la propiedad

            }
        },
        mounted() {
            if(this.getSecondaryNormativeStepsFromSameNormative.length>0) {
                let match = this.getSecondaryNormativeStepsFromSameNormative.find(n => this.value.includes(n.id));
                if(match) {
                    this.localValue = match;
                }
            }
            setTimeout(() => {
                this.$forceUpdate()
            }, 3000);
        },
        methods: {
        },
        computed:{
            getSecondaryNormativeStepsFromSameNormative() {
                return this.normativeItems.filter((n) => {
                    return n.type == 'secondary' && n.normative.id == this.normative.normative.id
                })
            },

        },
        watch: {
            localValue(newval, oldval) {
                let newValue = [...this.value]; // Crea una copia de value
                console.log(oldval,newval)
                if (Array.isArray(this.localValue)) {
                        if (this.localValue.length == 0) {
                            let index = newValue.findIndex(v => v === oldval[0]);
                            newValue.splice(index, 1);
                        } else {
                            newValue.push(this.localValue[0]);
                        }
                } else {
                    let index = newValue.findIndex(v => v === oldval);
                    if(!newval) {
                        let index = newValue.findIndex(v => v === oldval);
                        newValue.splice(index, 1);
                    }
                     else if (index !== -1) {
                        newValue.splice(index, 1, this.localValue);
                    } else {
                        newValue.push(this.localValue);
                    }
                }
                this.$emit('input', newValue); // Emite el evento con la copia modificada
            }
        }
    }
</script>

<style>

</style>