<template>
    <div>
        <v-checkbox :label="normative.name" :value="normative.id" v-model="value.normative" @change="emitChange({normative:$event})"
            class="font-weight-bold black--text">
        </v-checkbox>
        <v-select flat label="Select an option" dense item-text="description" @change="emitChange({normative_steps:$event})" item-value="id"
            :items="value.normative_steps"></v-select>

    </div>
</template>

<script>
    export default {
        props: {
            normative: {
                type: Object,
                default: {}
            },
            value: {
                type: Object,
                default: {}
            }
        },
        methods:{
            emitChange(e) {
                this.$emit('input', {...this.value,e})
            }
        }
    }
</script>

<style>

</style>