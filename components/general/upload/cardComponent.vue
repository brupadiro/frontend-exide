<template>
  <v-card class="rounded-lg">
    <v-card-title>
      <v-btn fab x-small color="red" v-if="value!=null" @click="deleteImg">
        <v-icon class="white--text">mdi-close</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text class="d-flex justify-center">
      <v-sheet color="indigo lighten-4" width="100%" height="150"
          class="rounded d-flex justify-center align-center dotted-border p-relative" @click="selectPhoto">
      <template v-if="checkIfImage(value)">
        <v-img :src="getUrl(value)" width="100%" height="80" contain></v-img>
      </template>
      <template v-else>
        <v-icon size="80" @click="selectPhoto">mdi-file-outline-add</v-icon>
      </template>
      <input type="file" style="display: none" ref="uploadFile" @change="onFileChange">
      </v-sheet>
    </v-card-text>
    <v-divider></v-divider>
  </v-card>
</template>

<script>
export default {
  props: {
    value: Object
  },
  methods: {
    checkIfImage(file) {
      if (file && file.type && file.type.includes('image')) {
        return true;
      } else {
        return false;
      }
    },
    deleteImg() {
      var confirmDelete = window.confirm('¿Estás seguro que deseas eliminar este archivo?');
      if (confirmDelete) {
        if (this.value.id) {
          this.$axios.delete('/upload/files/' + this.value.id);
        }
        this.$emit('input', null);
      }
    },
    getUrl(file) {
      if (file.url) {
        return `http://164.92.69.180${file.url}`;
      } else {
        return URL.createObjectURL(file);
      }
    },
    selectPhoto() {
      this.$refs.uploadFile.click();
    },
    onFileChange(event) {
      const file = event.target.files[0];
      this.$emit('input', file);
    }
  }
};
</script>
