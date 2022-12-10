import { initializeApp } from "firebase/app";

const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
const authDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;
const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;

const firebaseApp = initializeApp({
    apiKey,
    authDomain,
    projectId,
});

export default firebaseApp;
