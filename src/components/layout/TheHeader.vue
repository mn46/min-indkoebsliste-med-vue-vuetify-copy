<template>
  <v-card height="75">
    <v-toolbar extended>
      <v-toolbar-title text="Dine Indkøbslister"></v-toolbar-title>

      <template v-slot:append>
        <v-btn icon="mdi-magnify" @click="handleClick"></v-btn>

        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-toolbar>
  </v-card>
</template>
<script>
export default {
  data() {},
  methods: {
    handleClick() {
      console.log("clicked");
    },
  },
};
</script>
