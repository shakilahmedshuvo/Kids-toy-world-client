// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjCcEeKejkKWv2j21HYGBPsV4SbNDUgJg",
    authDomain: "kids-toy-world.firebaseapp.com",
    projectId: "kids-toy-world",
    storageBucket: "kids-toy-world.appspot.com",
    messagingSenderId: "33262344643",
    appId: "1:33262344643:web:63af5a40a3d7f672f54576"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;