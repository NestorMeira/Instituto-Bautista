
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCA_9u5kMRSnyL8T6TdkWTOvqchiyNUGRc",
  authDomain: "bautista-1bb61.firebaseapp.com",
  projectId: "bautista-1bb61",
  storageBucket: "bautista-1bb61.appspot.com",
  messagingSenderId: "332066770224",
  appId: "1:332066770224:web:43b7ffe68c3c9c4abb4cf5"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export  { db, storage };