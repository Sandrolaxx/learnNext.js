import Layout from '../components/Layout';
import useAppContext from '../data/hook/useAppContext';

export default function Notifications() {
    const { alterTheme } = useAppContext();

    return (
        <Layout title="Notificações" subTitle="Realize o gerenciamento de suas notificações">
            <h1>
                <button onClick={alterTheme}>
                    Trocar tema
                </button>
            </h1>
        </Layout>
    )
}
