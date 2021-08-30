import Layout from "../components/Layout";

export default function HelloNext() {
    const world = 'Next🔥!';

    return (
        <Layout title="Hello World Brabo">
            <h1 className="hello">
                Hello {world}
            </h1>
        </Layout>
    );
}