import Layout from "../../../components/Layout";
import {useRouter } from "next/router";

export default function UserByCode() {
    const router = useRouter();

    return (
        <Layout title="Navegação Dinâmica">
            <div>SessionId = {router.query.sessionId}</div>
            <div>Code = {router.query.userCode}</div>
        </Layout>    
    );
}