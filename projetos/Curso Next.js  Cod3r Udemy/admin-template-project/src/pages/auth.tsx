import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";

export default function Authentication() {
    const [mode, setMode] = useState<"login" | "cadastro">("login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <h1>Autenticação</h1>
            <AuthInput required type="email" label="E-mail"
                value={email} changeValue={setEmail} />
            <AuthInput required type="password" label="Senha"
                value={password} changeValue={setPassword} />
        </div>
    );
}