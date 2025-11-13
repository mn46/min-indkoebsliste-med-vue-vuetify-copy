<template>
<!-- // template er taget fra vuetify -->
  <div>
    <h3 v-if="alternatives.length">Vælg grønt alternativ</h3>
    <v-select 
      v-model="selectedAlternative"
      @update:modelValue="handleSelect"
      clearable
      chips
      label="Vælg alternativ"
      :items="alternatives"
      item-title="prodName"
      item-value="prodName"
      v-if="alternatives.length"
      variant="solo-filled"
      bg-color="green"
    ></v-select>
  </div>
</template>
<!-- // template er taget  fra vuetify -->


<script>
import { ref, onMounted } from "vue";
import { db } from "@/utility/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";


export default {
  name: "GreenDropDown",
  props:{
    productId:{
      type: String,
      required: true
    }
  },
  data(){
    return{
      alternatives:[],
      selectedAlternative:null
    };
  },
    //ai
    methods: {
    async fetchAlternatives() {
        try {
          // Reference til produktet i "Products" samlingen
          const prodRef = doc(db, "Products", this.productId);
          const prodSnap = await getDoc(prodRef);

          // Hvis dokumentet ikke findes, stop
          if (!prodSnap.exists()) return;

          const data = prodSnap.data();

          // Tjek om der er alternativer og gem dem, ellers tom array
          if (Array.isArray(data.prodAlternatives)) {
            this.alternatives = data.prodAlternatives;
          } else {
            this.alternatives = [];
          }

        } catch (err) {
          console.log("Fejl ved hentning af alternativer:", err);
        }
      },
      handleSelect(value){  const alternative = this.alternatives.find(a => a.prodName === value);
        if (alternative) {
          this.$emit("alternativeSelected", {
            originalId: this.productId, 
            alternative: alternative
          }); }
        },
        
          // ai 
    
  },
  mounted(){
            this.fetchAlternatives();
          }
}</script>