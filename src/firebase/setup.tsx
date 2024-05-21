import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDom8kuq9z7RpKvIgF6A0voO3mhAo9x7dg",
  authDomain: "mymyntra-b909a.firebaseapp.com",
  projectId: "mymyntra-b909a",
  storageBucket: "mymyntra-b909a.appspot.com",
  messagingSenderId: "1020354219000",
  appId: "1:1020354219000:web:b32ae95b3787d1c84aa40d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const database = getFirestore(app)