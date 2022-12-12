import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { AlertIcon, GoogleIcon } from "../components/icons";
import useAuthContext from "../data/hook/useAuthContext";

export default function Authentication() {
    const { handleRegister, handleLogin, handleLoginGoogle } = useAuthContext();
    const [mode, setMode] = useState<"login" | "cadastro">("login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [erroMsg, setErroMsg] = useState<string | null>();

    function handleShowError(msg: string, msgExibitionSeconds = 5) {
        setErroMsg(msg);

        setTimeout(() => setErroMsg(null), msgExibitionSeconds * 1000);
    }

    async function handleSubmit() {
        try {
            if (mode === "login") {
                await handleLogin?.(email, password);

                return;
            }

            await handleRegister?.(email, password);
        } catch (error: any) {
            handleShowError(error?.code ?? "Erro ao realizar ".concat(mode));
        }
    }

    async function loginGoogle() {
        try {
            await handleLoginGoogle?.();
        } catch (error: any) {
            handleShowError(error?.code ?? "Erro ao realizar ".concat(mode));
        }
    }

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="hidden w-1/2 md:block xl:w-2/3">
                <img src="https://source.unsplash.com/random" className="h-screen w-full object-cover" alt="Imagem tela de autenticação" />
            </div>
            <div className="w-3/4 m-10 md:w-1/2 xl:w-1/3">
                <h1 className="text-3xl font-bold mb-5 text-center">
                    {mode == "login" ? "Entre com Sua Conta" : "Crie sua Conta"}
                </h1>

                {erroMsg &&
                    <div className="w-full flex flex-col items-center bg-red-400 
                    text-white p-3 border border-red-700 rounded-lg">
                        {AlertIcon()}
                        <span>
                            {erroMsg}
                        </span>
                    </div>
                }

                <AuthInput required type="email" label="E-mail"
                    value={email} changeValue={setEmail} />
                <AuthInput required type="password" label="Senha"
                    value={password} changeValue={setPassword} />

                <button onClick={handleSubmit} className="w-full bg-indigo-500 
                hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-12">
                    {mode == "login" ? "Entrar" : "Cadastrar"}
                </button>

                <span className="w-full flex justify-center">
                    <hr className="w-3/4 my-8 border-gray-300" />
                </span>

                <div className="w-full flex flex-col items-center">
                    <p className="text-sm">
                        Logar com
                    </p>
                    <button onClick={loginGoogle} className="hover:bg-indigo-50 w-12 rounded-full mt-2 p-1">
                        {GoogleIcon(10, 10)}
                    </button>
                </div>

                {mode == "login" ? (
                    <p className="mt-8 text-center">
                        Novo por aqui?
                        <a onClick={() => setMode("cadastro")} className="text-blue-400
                            hover:text-blue-500 font-semibold cursor-pointer">
                            {" "}Crie sua conta
                        </a>
                    </p>
                ) : (
                    <p className="mt-8 text-center">
                        Já possui uma conta?
                        <a onClick={() => setMode("login")} className="text-blue-400
                            hover:text-blue-500 font-semibold cursor-pointer">
                            {" "}Entrar
                        </a>
                    </p>
                )}
            </div>
        </div>
    );
}