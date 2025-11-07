<template>Co2{{ productsWithThisId[0].co2_per_kg }}</template>
<script>
export default {
  data() {
    return {
      // console.log(this.productsWithThisId);
    };
  },
  props: ["productsWithThisId"],
};
</script>
