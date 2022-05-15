export default function desafio1() {
    const listaNomes = [
        "Clebim",
        "Jão",
        "Sandrolax",
        "Gabriellix"
    ]
    
    return(
        <div>
            {listaNomes.map(e => <h1 key={e} >{e}</h1>)}
        </div>
    );
}