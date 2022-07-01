// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCabvQi8dQCr8hbk52isHBR7Lke__-BSo",
    authDomain: "task-manager-6ae10.firebaseapp.com",
    projectId: "task-manager-6ae10",
    storageBucket: "task-manager-6ae10.appspot.com",
    messagingSenderId: "697296759924",
    appId: "1:697296759924:web:4a5b4f3ea56401bcb7b521"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;