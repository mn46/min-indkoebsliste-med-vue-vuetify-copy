<template>
  <p v-if="loading">
    <the-loader />
  </p>

  <v-card class="mx-auto" max-width="425">
    <v-list v-for="(list, index) in shoppingList" :key="index" lines="two">
      <v-list-item>
        <!-- <template v-slot:subtitle> -->
        <p>{{ list.listName }}</p>
        <p>{{ list.listCreatedDate }}</p>
        <div v-if="list.totalCO2 * 4 < 60">
          <p>Lav</p>
          <p>CO₂: {{ list.totalCO2 }} kg</p>
        </div>
        <div v-else-if="list.totalCO2 * 4 > 60 && list.totalCO2 * 4 < 160">
          <p>Medium</p>
          <p>CO₂: {{ list.totalCO2 }} kg</p>
        </div>
        <div v-else>
          <p>Høj</p>
          <p>CO₂: {{ list.totalCO2 }} kg</p>
        </div>
        <!-- </template> -->
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import productService from "@/services/productService";
import { formatDateDMY } from "@/utility/dateFormatter";
import TheLoader from "@/components/TheLoader.vue";
import TotalCarbon from "@/components/TotalCarbon.vue";
import { db } from "@/utility/firebaseConfig";
import { collection, getDocs, where, query, documentId } from "firebase/firestore";
const productsCollection = collection(db, "Products");

export default {
  components: {
    TheLoader,
    TotalCarbon,
  },
  data() {
    return {
      shoppingList: [],
      loading: true,
    };
  },
  async mounted() {
    try {
      const receivedShoppingListFromDatabase = await productService.getShoppingList();
      console.log("Received Indkoebsliste Data: ", receivedShoppingListFromDatabase);
      const allProductsReferenceIdsArray = receivedShoppingListFromDatabase.map((item) => {
        return item.Products;
      });
      const productsRefs = allProductsReferenceIdsArray.flat();
      console.log("productsRefs: ", productsRefs); //array of product table document reference id's

      if (productsRefs.length === 0) {
        this.shoppingList = receivedShoppingListFromDatabase.map((list) => {
          return {
            listName: list.CategoryName,
            listCreatedDate: list.CreatedDate
              ? formatDateDMY(list.CreatedDate)
              : "No date available",
            totalCO2: 0,
          };
        });
        return;
      }
      // console.log("Received data from Firebase Database:", this.shoppingList);

      const q = query(productsCollection, where(documentId(), "in", productsRefs));
      const querySnapshot = await getDocs(q);

      // AI start
      const productCo2Map = {};
      querySnapshot.forEach((doc) => {
        productCo2Map[doc.id] = doc.data().co2_per_kg;
      });
      this.shoppingList = receivedShoppingListFromDatabase.map((list) => {
        const listTotalCO2 = list.Products.reduce((sum, productId) => {
          const co2Value = productCo2Map[productId] || 0;
          return sum + co2Value;
        }, 0);
        // AI end
        return {
          listName: list.CategoryName,
          listCreatedDate: list.CreatedDate ? formatDateDMY(list.CreatedDate) : "No date available",
          totalCO2: listTotalCO2,
        };
      });

      console.log("Processed shopping list data with CO2:", this.shoppingList);
    } catch (err) {
      console.error("Error fetching shopping list:", err);
    } finally {
      this.loading = false;
    }
  },
};
</script>
