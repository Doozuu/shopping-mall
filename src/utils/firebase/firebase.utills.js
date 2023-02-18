import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZAVjacTjcjAdQPkTnI2rOR1C5hoOXloI",
  authDomain: "crwn-clothing-db-d9f78.firebaseapp.com",
  projectId: "crwn-clothing-db-d9f78",
  storageBucket: "crwn-clothing-db-d9f78.appspot.com",
  messagingSenderId: "15352079026",
  appId: "1:15352079026:web:f0ecd8443246c285bb1fab",
};

const firebaseApp = initializeApp(firebaseConfig);

// 다른 소셜 로그인도 비슷한 방식으로 진행하면 됨. ex. facebookProvider 만들기
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

// firestore에 데이터 올리기
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

// firestore에서 데이터 가져오기
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  // doc(database, collections, unique identifier)

  const userSnapshot = await getDoc(userDocRef);

  // user의 기존 정보가 없으면 document를 create, set 하기
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  // user 기존 정보가 있으면 그대로 실행
  return userDocRef;
};

// 이메일 가입
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

// 이메일 로그인
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

// 로그아웃
export const SignOutUser = async () => await signOut(auth);

// 자동으로 인증 변화 감지
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
// Observer Pattern
// onAuthStateChanged(auth, callback, errorCallback, completedCallback);
