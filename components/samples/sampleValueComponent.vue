<template>
    <v-edit-dialog @close="updateTrackingOrder(item)" save-text="Guardar" cancel-text="Guardar">
        <v-text-field hide-details outlined dense height="20" readonly :value="setValue('#',item.Bezeichnun)">
        </v-text-field>
        <template v-slot:input>
            <v-text-field v-model="item.product.tracking_number" label="Edit"></v-text-field>
        </template>
    </v-edit-dialog>

</template>

<script>
    export default {
        props:{
            value:{
                type:String,
                default:''
            }
        }
    }
</script>

<style>

</style>