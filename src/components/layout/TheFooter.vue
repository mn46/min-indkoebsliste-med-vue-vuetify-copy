<template>
  <v-footer class="text-center d-flex flex-column ga-2 py-4 bg-primary" color="indigo-lighten-1">
    <div class="d-flex ga-3">
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        density="comfortable"
        variant="text"
      ></v-btn>
    </div>
  </v-footer>
</template>
<script>
export default {
  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
  methods: {},
};
</script>
