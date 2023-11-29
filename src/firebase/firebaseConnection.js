import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCPkwuINWG4zwc4LihFtyDC0PysD6W3mbQ",
  authDomain: "appaula-8e4d1.firebaseapp.com",
  databaseURL: "https://appaula-8e4d1-default-rtdb.firebaseio.com",
  projectId: "appaula-8e4d1",
  storageBucket: "appaula-8e4d1.appspot.com",
  messagingSenderId: "955963563481",
  appId: "1:955963563481:web:ef21d3d431751a98cbcdc8"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export { db, app };