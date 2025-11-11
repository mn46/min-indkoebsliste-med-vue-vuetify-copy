<template>
  <v-app>
    <the-header></the-header>
    <!-- <v-main>
      <router-view />
    </v-main> -->
    <section>
      <ShoppingList />
      <PlusButton />
    </section>
    <the-footer></the-footer>
  </v-app>
</template>

<script>
import ShoppingList from "./views/ShoppingList.vue";
import PlusButton from "./components/PlusButton.vue";
export default {
  components: {
    ShoppingList,
    PlusButton,
  },

  data() {
    return {};
  },
};
</script>
