import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCRKtzFEC099Mfc-QwunfAGykpXdivHkuU",
    authDomain: "clone-edaed.firebaseapp.com",
    projectId: "clone-edaed",
    storageBucket: "clone-edaed.appspot.com",
    messagingSenderId: "935671437436",
    appId: "1:935671437436:web:66d30d7849fce64dfdd1f9",
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export default db;
