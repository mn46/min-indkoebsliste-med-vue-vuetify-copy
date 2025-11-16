<template>
  <v-bottom-navigation height="56" class="bottom-bar">
    <v-btn variant="text" class="text-body-2 font-weight-medium" @click="$router.push('/')">
      <v-icon start :icon="mdiFormatListBulleted" />
      dine indkøbslister
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import { mdiFormatListBulleted } from "@mdi/js";

export default {
  methods: {
    mdiFormatListBulleted,
  },
};
</script>
