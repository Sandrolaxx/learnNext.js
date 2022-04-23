import { useState } from "react";
import Layout from "../components/Layout";

export default function Integracao() {
    
    const [code, setCode] = useState(1);
    const [userData, setUserData] = useState({});
    
    async function getUserData() {
        const resp = await fetch(`http://localhost:3000/api/${code}/account`);
        const respData = await resp.json();
        setUserData(respData);
    }

    return (
        <Layout title="Integração API Next #01">
            <div>
                <input type="number" value={code} onChange={e => setCode(e.target.value)} />
                <button onClick={getUserData} >Obter Dados da Conta</button>
            </div>
            <ul>
                <li>Id: {userData.id}</li>
                <li>Nome: {userData.name}</li>
                <li>E-mail: {userData.email}</li>
            </ul>
        </Layout>
    );
}