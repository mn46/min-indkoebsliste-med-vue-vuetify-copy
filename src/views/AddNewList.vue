<template>
  <v-form id="list-form" @submit.prevent="handleSaveList">
    <div class="d-flex align-center mb-2">
      <v-btn @click="handleClickBackBtn" variant="flat" class="pa-0 ma-0 fill-height fill-width">
        <v-icon :icon="mdiArrowLeft" size="x-large"></v-icon
      ></v-btn>

      <v-text-field placeholder="Skriv navn" v-model="listName" :rules="validationRules" />
    </div>

    <v-list id="selected-products-list">
      <v-list-item v-for="product in shoppingListProducts" v-bind:key="product">
        <div class="d-flex align-center justify-space-between w-100 mb-2">
          <div>
            <v-list-item-title>{{
              productsList.find((prod) => prod.value === product).title
            }}</v-list-item-title>
            <v-list-item-subtitle
              >{{ productsList.find((prod) => prod.value === product).co2_per_kg }} kg
              CO₂</v-list-item-subtitle
            >
          </div>
          <v-btn
            :icon="mdiDelete"
            class="bg-primary"
            size="small"
            @click="handleClickDelete(product)"
          ></v-btn>
        </div>
      </v-list-item>
    </v-list>

    <v-combobox
      ref="combobox"
      :items="productsList"
      item-value="value"
      label="Vælg produkt"
      v-on:update:model-value="handleClearInput"
      @update:model-value="setShoppingListData"
    >
      <template v-slot:item="{ props, item }">
        <v-list-item v-bind="props" title="">
          <v-list-item-title>{{ item.raw.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.raw.co2_per_kg }} kg CO₂</v-list-item-subtitle>
        </v-list-item>
      </template>
    </v-combobox>

    <v-btn type="submit">Gem</v-btn>
  </v-form>
</template>

<script>
import productService from "../services/productService";
import { mdiArrowLeft, mdiDelete } from "@mdi/js";
export default {
  data() {
    return {
      productsList: [],
      shoppingListProducts: [],
      listName: "",
      validationRules: [(value) => !!value || "Liste navn er pakrævet."],
      mdiArrowLeft,
      mdiDelete,
    };
  },
  methods: {
    handleClickBackBtn() {
      if (this.shoppingListProducts.length === 0) this.$router.push({ path: "/" });
      else this.handleSaveList();
    },
    handleClearInput(item) {
      if (this.productsList.includes(item)) this.$refs.combobox.search = "";
    },
    handleClickDelete(product) {
      this.shoppingListProducts = this.shoppingListProducts.filter((prod) => prod !== product);
    },
    setShoppingListData(data) {
      if (this.productsList.includes(data)) this.shoppingListProducts.push(data.value);
    },
    async handleSaveList() {
      if (!this.listName || this.shoppingListProducts.length === 0) return;

      const list = {
        CategoryName: this.listName,
        CreatedDate: new Date(),
        Products: this.shoppingListProducts,
      };

      productService.saveListData(list);

      this.$router.push({ path: "/" });
    },
  },
  async mounted() {
    try {
      const receivedProductsListFromDatabase = await productService.getProductsList();
      this.productsList = receivedProductsListFromDatabase.map((list) => {
        return {
          value: list.id,
          title: list.prodName,
          co2_per_kg: list.co2_per_kg,
          prodAlternatives: list.prodAlternatives || [],
        };
      });
    } catch (err) {
      console.error("Error fetching products list", err);
    }
  },
};
</script>

<style>
#list-form {
  background-color: white;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  padding: 3vh 5vw;
}

#selected-products-list {
  max-height: 55vh;
  overflow: auto;
  margin-bottom: 3vh;
}
</style>
