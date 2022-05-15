export default function jsx3() {
    const integrandoJS = "Holoco! Uma variável";
    const brackets = "{}";
    
    return(
        <div>
            <h1>Integração JS  e JSX</h1>
            <h2>{integrandoJS}</h2>
            <p>Para utilizar JS no JSX é necessário utilizar {brackets} </p>
            <p>{Math.max(10, 20)}</p>
        </div>
    )
}