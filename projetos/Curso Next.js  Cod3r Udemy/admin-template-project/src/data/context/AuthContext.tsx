import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import firebaseApp from "../../firebase/config";
import { AuthContextProps, User } from "../../utils/types";
import { normalizeFirebaseUser } from "../../utils/utils";
import router from "next/router";

const AuthContext = createContext<AuthContextProps>({});

export function AuthProvider(props: any) {
    const [user, setUser] = useState<User>();
    const auth = getAuth(firebaseApp);
    const provider = new GoogleAuthProvider();

    async function handleLoginGoogle() {
        const response = await signInWithPopup(auth, provider);
        
        const user = await normalizeFirebaseUser(response.user);

        if (user?.email) {
            setUser(user);
            
            router.push("/");
        }
    }

    return (
        <AuthContext.Provider value={{ user, handleLoginGoogle }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;