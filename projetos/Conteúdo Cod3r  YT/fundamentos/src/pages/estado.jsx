import { useState } from "react";
import Layout from "../components/Layout";

export default function Estado() {
    const [numero, setNumero] = useState(0);

    function incrementar() {
        setNumero(numero + 1);
    }

    return (
        <Layout title="Componente com Estado">
            <h1>{numero}</h1>
            <button onClick={incrementar}>Incrementar</button>
        </Layout>
    );

}