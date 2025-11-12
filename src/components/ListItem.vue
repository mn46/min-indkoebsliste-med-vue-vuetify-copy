<template>
  <v-list-item class="rounded elevation-1">
    <v-list-item-title class="font-weight-bold">{{ listData.listName }}</v-list-item-title>
    <v-list-item-subtitle>{{ listData.listCreatedDate }}</v-list-item-subtitle>

    <template v-slot:append>
      <div class="d-flex flex-column align-end">
        <div class="d-flex align-center">
          <v-icon
            :color="getCo2LevelColor(listData.totalCO2)"
            icon="mdi-circle-medium"
            size="16"
            class="mr-1"
          ></v-icon>
          <span
            class="text-body-2 font-weight-medium"
            :class="`text-${getCo2LevelColor(listData.totalCO2)}`"
            >{{ getCo2LevelText(listData.totalCO2) }}</span
          >
        </div>
        <span class="text-caption">CO<sub>2</sub>: {{ listData.totalCO2.toFixed(2) }} kg</span>
      </div>
    </template>
    <div>
      <v-btn variant="tonal" class="text-center bg-secondary">Update </v-btn>
      <v-btn variant="tonal" class="text-center bg-primary" @click="openDialogComponent"
        >Delete
      </v-btn>
    </div>
  </v-list-item>
</template>

<script>
import getCo2LevelColor from "@/utility/getCo2LevelColor";
import getCo2LevelText from "@/utility/getCo2LevelText";
export default {
  props: ["listData"],
  data() {
    return {};
  },
  setup() {
    return {
      getCo2LevelColor,
      getCo2LevelText,
    };
  },
};
</script>
