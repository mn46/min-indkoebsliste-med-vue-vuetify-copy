// SOFIE's DB

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyClS4fNNZeVWcV3NYo83bvqVyqEGfnpAmw",
//   authDomain: "fir-roshni-http.firebaseapp.com",
//   databaseURL: "https://fir-roshni-http-default-rtdb.firebaseio.com",
//   projectId: "fir-roshni-http",
//   storageBucket: "fir-roshni-http.firebasestorage.app",
//   messagingSenderId: "50959810161",
//   appId: "1:50959810161:web:97a7773352c0bcd025e5d0",
//   measurementId: "G-23WT92YZX1"
// };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export { app as firebaseApp, db };

// SHOAIBS DB (DEN SKAL VI BRUGE DET ER DEN RIGTIGE MIN ER BARE SÅ JEG KUNNE ARBEJDE)
// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvQ1NnKlU4_Qla8FKC-joB62nnKjmJSjg",
  authDomain: "min-indkoebsliste.firebaseapp.com",
  projectId: "min-indkoebsliste",
  storageBucket: "min-indkoebsliste.firebasestorage.app",
  messagingSenderId: "823642800523",
  appId: "1:823642800523:web:5908b8f4b7845f6da26f8e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app as firebaseApp, db };

