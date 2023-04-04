import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAT8gZyKm0Z3LF_W4roXpumPlGPAW9sM-s",
    authDomain: "mandalaapp-dd5f1.firebaseapp.com",
    databaseURL: "https://mandalaapp-dd5f1-default-rtdb.firebaseio.com",
    projectId: "mandalaapp-dd5f1",
    storageBucket: "mandalaapp-dd5f1.appspot.com",
    messagingSenderId: "891732676584",
    appId: "1:891732676584:web:544f71b8dfbc2b2ab19e5d"
  };
  
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)