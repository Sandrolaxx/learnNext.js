export function getStaticProps() {
    return {
        props: {
            number: Math.random()
        }
    }
}

export default function Static2(props) {
    return (
        <div>
            <h1>Estático - #02 </h1>{/*Gerado de forma estática por padrão*/}
            <h2>{props.number}</h2>{/*Gerado de forma estática no build por conta do getStaticProps*/}
        </div>
    )
}