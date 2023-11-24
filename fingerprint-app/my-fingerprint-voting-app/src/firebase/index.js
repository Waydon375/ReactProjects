
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCt0M0ov4FuSElm2XmLuOrT7ku18uc3Lw8",
  authDomain: "votingapp-8738d.firebaseapp.com",
  projectId: "votingapp-8738d",
  storageBucket: "votingapp-8738d.appspot.com",
  messagingSenderId: "521999359683",
  appId: "1:521999359683:web:1193d00db0ecc5e01dcc76"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const votesRef = collection(db, 'votes')
 
