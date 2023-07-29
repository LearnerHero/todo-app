// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8nFZX2oVVwNkuASEPuPQNFvjXmU1f69M",
  authDomain: "todo-app-da215.firebaseapp.com",
  projectId: "todo-app-da215",
  storageBucket: "todo-app-da215.appspot.com",
  messagingSenderId: "205231061156",
  appId: "1:205231061156:web:97c368e0c34f373f560e31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)