// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrgt8cktwBl0V2lWi1Om0NsR9UsLdkeT8",
  authDomain: "zinafri-data.firebaseapp.com",
  projectId: "zinafri-data",
  storageBucket: "zinafri-data.appspot.com",
  messagingSenderId: "735374766530",
  appId: "1:735374766530:web:b0d08790101cda995ce65b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
