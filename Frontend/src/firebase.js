
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyDUTORL-nB52izp6YixPacwIiwByW_xHVA",
  authDomain: "masai-lms-clone.firebaseapp.com",
  projectId: "masai-lms-clone",
  storageBucket: "masai-lms-clone.appspot.com",
  messagingSenderId: "653551468639",
  appId: "1:653551468639:web:e97ea88ed42a7dd6815bea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)