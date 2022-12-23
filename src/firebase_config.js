// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnKn0CQg8Q_BBSPB8HkrewBTlwJ4VYOao",
  authDomain: "yogesh-blog.firebaseapp.com",
  projectId: "yogesh-blog",
  storageBucket: "yogesh-blog.appspot.com",
  messagingSenderId: "60061797753",
  appId: "1:60061797753:web:240e682b7582745b2373a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()


