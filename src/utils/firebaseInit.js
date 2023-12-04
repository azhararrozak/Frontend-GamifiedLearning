import firebase from "firebase/compat/app"; // Note the 'compat' in the import path
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

import firebaseConfig from "./firebaseConfig";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const storage = firebase.storage();
const firestore = firebase.firestore();

export { auth, storage, firestore };
