// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBibopNIxYztL1SVVXP1sOG66d2eetNXBo",
  authDomain: "simple-project-42.firebaseapp.com",
  projectId: "simple-project-42",
  storageBucket: "simple-project-42.firebasestorage.app",
  messagingSenderId: "700494700165",
  appId: "1:700494700165:web:5f79363fb7bc494e0393ec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
