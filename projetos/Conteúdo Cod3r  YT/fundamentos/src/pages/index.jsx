import Navegador from '../components/Navegador';

export default function Home() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexFlow: 'wrap',
            height: "100vh"
        }}>
            <Navegador rota="/helloNext" nomeRota="Olá Next" corBtn="#e20799"/>
            <Navegador rota="/jsx" nomeRota="JSX" corBtn="#810f55"/>
            <Navegador rota="/stylishWithLayout" nomeRota="Estilizando" corBtn="#3b0f81"/>
            <Navegador rota="/usingComponentsWithProps" nomeRota="Hello Props"/>
            <Navegador rota="/navegacao" nomeRota="Ex Navegação #01" corBtn="#00c0a1"/>
            <Navegador rota="/user/3/47" nomeRota="Ex Navegação #02" corBtn="#f07605"/>
            <Navegador rota="/estado" nomeRota="Componente Com Estado" corBtn="#eb39fa"/>
            <Navegador rota="/integracao_01" nomeRota="Integração API Next" corBtn="#b3a508"/>
            <Navegador rota="/staticRender" nomeRota="Renderização Estática" corBtn="#8008ee"/>
            <Navegador rota="/serverSideRender" nomeRota="Renderização no Servidor" corBtn="#fa4139"/>
        </div>
    );
}