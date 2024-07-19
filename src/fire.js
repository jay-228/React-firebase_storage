// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCM-zGCNejQ4os8xMuJrjNPy5ftn05LMEY",
  authDomain: "fir-storage-3423c.firebaseapp.com",
  projectId: "fir-storage-3423c",
  storageBucket: "fir-storage-3423c.appspot.com",
  messagingSenderId: "22296899436",
  appId: "1:22296899436:web:a73ef8d247c2d0d45a4d49",
  measurementId: "G-SX2Z03FDJS"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };