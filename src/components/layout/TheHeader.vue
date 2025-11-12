<template>
  <v-app-bar :elevation="4">
    <template v-slot:prepend>
      <v-btn :icon="mdiMenu"></v-btn>
    </template>

    <v-app-bar-title @click="reloadApp">Dine Indkøbslister</v-app-bar-title>

    <template v-slot:append>
      <v-btn :icon="mdiMagnify" @click="callSearchComponent"></v-btn>
      <v-btn :icon="mdiDotsVertical"></v-btn>
    </template>
  </v-app-bar>
</template>

<script>
import { mdiMagnify, mdiDotsVertical, mdiMenu } from "@mdi/js";
export default {
  data() {
    return {
      mdiMagnify,
      mdiDotsVertical,
      mdiMenu,
    };
  },
  methods: {
    reloadApp() {
      window.location.reload();
    },
    callSearchComponent() {
      console.log("clicked");
    },
  },
};
</script>
