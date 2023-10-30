import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA_G1P96FVIDMcWzLwHxVB92YdkB6n-cWY",
  authDomain: "purplebook-73286.firebaseapp.com",
  databaseURL: "https://purplebook-73286-default-rtdb.firebaseio.com",
  projectId: "purplebook-73286",
  storageBucket: "purplebook-73286.appspot.com",
  messagingSenderId: "1071213543297",
  appId: "1:1071213543297:web:2833360665f0a6dc58f280",
};

export const getFirebase = () => {
  return !getApps().length ? initializeApp(firebaseConfig) : getApp();
};

export const getFirebaseDatabase = (firebase) => {
  return getDatabase(firebase);
};

export const getFirebaseStorage = (firebase) => {
  return getStorage(firebase);
};