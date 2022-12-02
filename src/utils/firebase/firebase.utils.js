// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";

import{
  getFirestore,
  doc,
  getDoc,
  setDoc,

} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-_8zwWGCjPQS27cUck_GEh_61ar9wULI",
  authDomain: "clothing-db-23a17.firebaseapp.com",
  projectId: "clothing-db-23a17",
  storageBucket: "clothing-db-23a17.appspot.com",
  messagingSenderId: "334112702467",
  appId: "1:334112702467:web:de84ccc45edab116090e36"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt : "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth,provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth, additionalInformation = {}) =>{
  const userDocRef = doc(db,'users', userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  if(!userSnapShot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    
    try{
      await setDoc(userDocRef,{
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      }); 
    }
    catch (error){
      console.log('error creating the user',error.message)
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async(email,password) =>{
  if(!email || !password) return ;

  return await createUserWithEmailAndPassword(auth,email,password);
}

export const signInAuthUserWithEmailAndPassword = async(email,password) =>{
  if(!email || !password) return ;

  return await signInWithEmailAndPassword(auth,email,password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth,callback);