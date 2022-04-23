import Layout from "../components/Layout";

export default function Jsx() {
    const jsxArmazenado = <h1>JSX Armazenado💾</h1>;
    
    function funcaoJs() {
        return <h2>{"JSX on 🔥".toUpperCase()}</h2>;
    }

    return (
        <Layout title="JSX Brabo">
            {jsxArmazenado}
            {funcaoJs()}
            <p>
                {JSON.stringify({nome: 'Sandolax', idade: 22})}
            </p>
        </Layout>
    );
}