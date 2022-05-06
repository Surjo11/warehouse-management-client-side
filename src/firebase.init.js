import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsTtMo7EaDYFxE1ZXHKJOio2l3fScM6p0",
  authDomain: "el-sol-warhouse.firebaseapp.com",
  projectId: "el-sol-warhouse",
  storageBucket: "el-sol-warhouse.appspot.com",
  messagingSenderId: "40392996461",
  appId: "1:40392996461:web:fe3a6e932d2cd6c74a3164",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
