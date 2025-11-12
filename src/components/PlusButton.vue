<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <v-btn
          :icon="mdiPlus"
          size="large"
          @click="handleClickBtn"
          class="text-center bg-primary rounded-b-circle"
        ></v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiPlus } from "@mdi/js";

export default {
  data() {
    return {
      mdiPlus,
    };
  },
  methods: {
    handleClickBtn() {
      this.$emit("toggle-open");
    },
  },
};
</script>
