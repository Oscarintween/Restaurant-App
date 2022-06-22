// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKfz38UC9OhiK8xCMJ-eJ2nd0QDybUpb0",
  authDomain: "tarea-react-8d4f0.firebaseapp.com",
  projectId: "tarea-react-8d4f0",
  storageBucket: "tarea-react-8d4f0.appspot.com",
  messagingSenderId: "147748752977",
  appId: "1:147748752977:web:949e884b1ceb174f68b270"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp);

export { db }