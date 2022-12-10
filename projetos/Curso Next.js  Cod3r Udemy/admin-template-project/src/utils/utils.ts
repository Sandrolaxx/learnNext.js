import fireAuth from "firebase/auth";
import { User } from "./types";

export async function normalizeFirebaseUser(firebaseUser: fireAuth.User): Promise<User> {
    const token = await firebaseUser.getIdToken();

    return {
        uid: firebaseUser.uid,
        name: firebaseUser.displayName,
        email: firebaseUser.email,
        token,
        provider: firebaseUser.providerData[0].providerId,
        imageUrl: firebaseUser.photoURL,
    };
}
