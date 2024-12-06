
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { collection, getDocs , analytics , getAuth } from "firebase/firestore";
  import{ createUserWithEmailAndPassword, signInWithEmailAndPassword ,onAuthStateChanged, sendEmailVerification } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
  import { db } from "./firebaseConfig";
 
  const firebaseConfig = {
    apiKey: "AIzaSyAcnLmQLv1KcEcY4LVDMq7sbVgJitbvFkY",
    authDomain: "hackathon-191ad.firebaseapp.com",
    projectId: "hackathon-191ad",
    storageBucket: "hackathon-191ad.firebasestorage.app",
    messagingSenderId: "243144998417",
    appId: "1:243144998417:web:b1eb381e21c817b628fbb0",
    measurementId: "G-12CW3JT9JX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = firebase.firestore();
  const auth = firebase.auth();
export{collection, getDocs ,db , auth ,analytics ,  getAuth ,createUserWithEmailAndPassword, signInWithEmailAndPassword ,onAuthStateChanged, sendEmailVerification }

