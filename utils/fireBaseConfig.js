// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyApMiNn50KJecFGsLyQFZ4maomYOlsk2zQ",
    authDomain: "super-ray-418422.firebaseapp.com",
    projectId: "super-ray-418422",
    storageBucket: "super-ray-418422.appspot.com",
    messagingSenderId: "952306370651",
    appId: "1:952306370651:web:3bb6ce41c650430121977e",
    measurementId: "G-GDKMX2HTFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app); // Initialize Firestore

export { app, analytics, firestore }; // Export Firestore
