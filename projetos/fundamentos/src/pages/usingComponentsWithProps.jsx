import CabecalhoProps from "../components/CabecalhoProps";
import Layout from "../components/Layout";

export default function usingComponentsWithProps() {
    return (
        <Layout title="Component Que Passa Props...">
            <CabecalhoProps title='Se liga no Componente com props do pai🔥' />
        </Layout>
    );
}