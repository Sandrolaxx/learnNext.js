export function getStaticProps() {
    return {
        revalidate: 7,//Propriedade para que o conteúdo seja regerado a cada 7 segundos
        props: {
            number: Math.random()
        }
    }
}

export default function Static3(props) {
    return (
        <div>
            <h1>Estático - 03</h1>{/*Gerado de forma estática por padrão*/}
            <h2>{props.number}</h2>{/*Gerado de forma estática regerado a cada 7 segundos*/}
        </div>
    )
}