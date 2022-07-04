export default function Static1() {
    return (
        <div>
            <h1>Estático - 01</h1>{/*Gerado de forma estática por padrão*/}
            {/*<h2>{Math.random()}</h2>Acarreta em erro pois ocorre divergencia entre o que o server gerou com o do client*/}
            {/* Para resolver essa diferença iramos criar um estado a setalo do useEffect, ou utilizar o getStaticProps */}
        </div>
    )
}