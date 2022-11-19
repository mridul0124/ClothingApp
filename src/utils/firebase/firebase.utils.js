// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
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

export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth) =>{
  const userDocRef = doc(db,'users', userAuth.uid);

  console.log(userAuth);
  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);
  console.log(userSnapShot.exists());

  if(!userSnapShot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    
    try{
      await setDoc(userDocRef,{
        displayName,
        email,
        createdAt,
      }); 
    }
    catch (error){
      console.log('error creating the user',error.message)
    }
  }

  return userDocRef;
}