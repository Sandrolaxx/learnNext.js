import Navegador from '../components/Navegador';

export default function Home() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: "100vh"
        }}>
            <Navegador rota="/helloNext" nomeRota="Olá Next" corBtn="#e20799"/>
            <Navegador rota="/jsx" nomeRota="JSX" corBtn="#810f55"/>
            <Navegador rota="/stylishWithLayout" nomeRota="Estilizando" corBtn="#3b0f81" />
            <Navegador rota="/usingComponentsWithProps" nomeRota="Hello Props"/>
            <Navegador rota="/navegacao" nomeRota="Ex Navegação #01"/>
            <Navegador rota="/user/3/47" nomeRota="Ex Navegação #02"/>
        </div>
    );
}