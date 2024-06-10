'use client';
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyApMiNn50KJecFGsLyQFZ4maomYOlsk2zQ",
    authDomain: "super-ray-418422.firebaseapp.com",
    projectId: "super-ray-418422",
    storageBucket: "super-ray-418422.appspot.com",
    messagingSenderId: "952306370651",
    appId: "1:952306370651:web:3bb6ce41c650430121977e",
    measurementId: "G-GDKMX2HTFH"
};

const app = initializeApp(firebaseConfig);
let analytics;

if (typeof window !== 'undefined' && isSupported()) {
    analytics = getAnalytics(app);
}

const firestore = getFirestore(app);

export { app, analytics, firestore };
