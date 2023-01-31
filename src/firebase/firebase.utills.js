import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZAVjacTjcjAdQPkTnI2rOR1C5hoOXloI",
  authDomain: "crwn-clothing-db-d9f78.firebaseapp.com",
  projectId: "crwn-clothing-db-d9f78",
  storageBucket: "crwn-clothing-db-d9f78.appspot.com",
  messagingSenderId: "15352079026",
  appId: "1:15352079026:web:f0ecd8443246c285bb1fab",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  // doc(database, collections, unique identifier)
  const userSnapshot = await getDoc(userDocRef);
};
