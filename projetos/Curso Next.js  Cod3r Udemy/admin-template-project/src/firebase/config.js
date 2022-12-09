import firebase from "firebase/app";
import "firebase/auth";

const apiKey = process.NEXT_PUBLIC_FIREBASE_API_KEY;
const authDomain = process.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;
const projectId = process.NEXT_PUBLIC_FIREBASE_PROJECT_ID;

if (!firebase.getApps.length) {
  firebase.initializeApp({
    apiKey,
    authDomain,
    projectId,
  });
}

export default firebase;
