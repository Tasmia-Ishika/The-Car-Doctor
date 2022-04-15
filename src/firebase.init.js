// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYfKBC079nDauYzFqEscpr59epaLxX0lw",
  authDomain: "genius-car-services-6f02c.firebaseapp.com",
  projectId: "genius-car-services-6f02c",
  storageBucket: "genius-car-services-6f02c.appspot.com",
  messagingSenderId: "509340154860",
  appId: "1:509340154860:web:29f77cce460b7925d7dec9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;