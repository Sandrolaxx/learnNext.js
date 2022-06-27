import React from "react";
import { useState } from "react";

const AuthContext = React.createContext();

export default function AuthProvider(props) {
    const [data, setData] = useState({ name: "Sandrolax" });

    return (
        <AuthContext.Provider value={{data, setData}}>
            {props.children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return React.useContext(AuthContext);
}