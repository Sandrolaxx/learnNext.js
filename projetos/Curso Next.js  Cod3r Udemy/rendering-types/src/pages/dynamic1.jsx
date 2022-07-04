export function getServerSideProps() {
    return {
        props: {//Também poderiamos definir revalidate aqui!
            number: Math.random()
        }
    }
}


export default function Dynamic1(props) {
    return (
        <div>{/*Conteúdo dinâmico gerado do lado do servidor para cada nova request!!*/}
            <h1>Dinâmico - 01</h1>
            <h2>{props.number}</h2>
        </div>
    )
}