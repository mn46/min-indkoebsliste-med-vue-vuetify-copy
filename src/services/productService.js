import { db } from "@/utility/firebaseConfig";
// import { collection, addDoc, getDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  onSnapshot,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";

const shoppingListCollection = collection(db, "indkoebsliste");
const productsListCollection = collection(db, "Products");

export default {
  async getShoppingList() {
    const snapshot = await getDocs(shoppingListCollection);

    return snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
  },
  async getProductsList() {
    const snapshot = await getDocs(productsListCollection);

    return snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
  },
  async createShoppingList(listName) {
    const snapshot = await addDoc(shoppingListCollection, {
      CategoryName: listName,
      CreatedDate: new Date(),
      Products: [],
    });

    return snapshot.id;
  },
  listenToShoppingList(listId, callback) {
    const listRef = doc(db, "indkoebsliste", listId);

    const unsubscribe = onSnapshot(listRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.data();
        console.log("List updated:", data);
        callback(data);
      }
    });

    return unsubscribe;
  },
  async addProductToList(listId, product) {
    const listRef = doc(db, "indkoebsliste", listId);

    await updateDoc(listRef, {
      Products: arrayUnion(product),
    });

    console.log("Product added:", product);
  },
};
