import Layout from "../components/Layout";

export function getServerSideProps() {

    return {
        props: {
            staticNumber: Math.random().toFixed(2),
        },
    }
}

export default function serverSideRender(props) {

    return(
        <Layout title="Reenderização no Servidor(SSR)">
            <h1>Número Gerado no Servidor(SSR): {props.staticNumber}</h1>
        </Layout>
    );

}