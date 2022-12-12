import fireAuth, { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import cookies from "js-cookie";
import router from "next/router";
import { createContext, useEffect, useState } from "react";
import firebaseApp from "../../firebase/config";
import { AuthContextProps, User } from "../../utils/types";
import { normalizeFirebaseUser } from "../../utils/utils";

const AuthContext = createContext<AuthContextProps>({});

export function AuthProvider(props: any) {
    const [user, setUser] = useState<User>();
    const [isLoading, setLoading] = useState(true);
    const auth = getAuth(firebaseApp);
    const provider = new GoogleAuthProvider();

    async function handleLogin(email: string, password: string) {
        try {
            setLoading(true);

            const response = await signInWithEmailAndPassword(auth, email, password);

            await configSession(response.user);
            
            router.push("/");
        } finally {
            setLoading(false);
        }
    }

    async function handleRegister(email: string, password: string) {
        try {
            setLoading(true);

            const response = await createUserWithEmailAndPassword(auth, email, password);

            await configSession(response.user);
            
            router.push("/");
        } finally {
            setLoading(false);
        }
    }

    async function handleLoginGoogle() {
        try {
            setLoading(true);

            const response = await signInWithPopup(auth, provider);

            await configSession(response.user);
            
            router.push("/");
        } finally {
            setLoading(false);
        }
    }

    async function handleLogout() {
        try {
            setLoading(true);

            await auth.signOut();
            await configSession(null);

            router.push("/auth");
        } finally {
            setLoading(false);
        }
    }

    async function configSession(firebaseUser: fireAuth.User | null) {
        if (firebaseUser?.email) {
            const user = await normalizeFirebaseUser(firebaseUser);

            setUser(user);
            manageCookie(true);
            setLoading(false);

            return user.email;
        }

        setUser(undefined);
        manageCookie(false);
        setLoading(false);

        return false;
    }

    function manageCookie(isUserAuth: boolean) {
        if (isUserAuth) {
            cookies.set("usr_auth", isUserAuth ? "true" : "false", {
                expires: 7
            });
        } else {
            cookies.remove("usr_auth");
        }
    }

    useEffect(() => {
        if (cookies.get("usr_auth") == "true") {
            const removeObserver = auth.onIdTokenChanged(configSession);

            return () => removeObserver();
        } else {
            setLoading(false);
        }
    }, []);

    return (
        <AuthContext.Provider value={{
            user, isLoading,
            handleLoginGoogle, handleLogout,
            handleRegister, handleLogin
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;