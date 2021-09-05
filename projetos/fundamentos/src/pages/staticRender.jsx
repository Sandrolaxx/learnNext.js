import Layout from "../components/Layout";

export function getStaticProps() {

    return {
        props: {
            staticNumber: Math.random().toFixed(2),
        },
    }
}

export default function staticRendering(props) {

    return(
        <Layout title="Reenderização Estática(SSG)">
            <h1>Número Gerado de Forma Estática(SSG): {props.staticNumber}</h1>
        </Layout>
    );

}