// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMDf_TSIxm8vl892ziohdIx5cQQxZb54Y",
  authDomain: "myapp-2cf13.firebaseapp.com",
  projectId: "myapp-2cf13",
  storageBucket: "myapp-2cf13.appspot.com",
  messagingSenderId: "1067427624935",
  appId: "1:1067427624935:web:abc5531a3e547f84452f42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}