import firebase from "firebase/app";
import 'firebase/firestore';

 const firebaseConfig = {
    apiKey: "AIzaSyB5wQMpOL1V1YNU8Da4eGcFtimoASpw08A",
    authDomain: "espaco-ceramica.firebaseapp.com",
    projectId: "espaco-ceramica",
    storageBucket: "espaco-ceramica.appspot.com",
    messagingSenderId: "981830129334",
    appId: "1:981830129334:web:70b629e0989b70eac8b817"
};

firebase.initializeApp(firebaseConfig);
export const firebaseDb = firebase.firestore();
export const firebaseAuth = firebase.auth();

