import firebase from "firebase/app";
import "firebase/database";

const apis = {
  apiKey: "AIzaSyBB9om8w-pFUhJAp9myuXexowaszr-Ye-4",
  authDomain: "swp-final-database.firebaseapp.com",
  databaseURL: "https://swp-final-database.firebaseio.com",
  projectId: "swp-final-database",
  storageBucket: "swp-final-database.appspot.com",
  messagingSenderId: "222849009834",
  appId: "1:222849009834:web:0628c729ddc38f6a"
};

firebase.initializeApp(apis);

export default firebase;
