<template>
  <the-header></the-header>
  <section>
    <h4>Seneste 30 dage</h4>
    <ShoppingList />
  </section>
  <the-footer></the-footer>
</template>

<script>
import ShoppingList from "./views/ShoppingList.vue";
export default {
  components: {
    ShoppingList,
  },

  data() {
    return {};
  },
};
</script>
