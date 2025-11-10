<template>
  <the-header></the-header>
  <section>
    <h4>Seneste 30 dage</h4>
    <ShoppingList />
    <PlusButton />
    <GreenDropDown />
  </section>
  <the-footer></the-footer>
  <router-view></router-view>
</template>

<script>
import ShoppingList from "./views/ShoppingList.vue";
import PlusButton from "./components/PlusButton.vue";
import GreenDropDown from "./components/GreenDropDown.vue";
export default {
  components: {
    ShoppingList,
    PlusButton,
    GreenDropDown
  },

  data() {
    return {};
  },
};
</script>
