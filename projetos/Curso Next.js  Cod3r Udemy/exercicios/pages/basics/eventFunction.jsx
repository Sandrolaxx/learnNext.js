export default function handleFunctions() {
    function getInputProps(event) {
        console.log("Valor do Input:".concat(event.target.value));
    }

    function handleLogClick() {
        console.log("Fui clicado🤯!");
    }
    
    return (
        <div>
            <button onClick={handleLogClick} >Clique aqui!</button>
            <button onClick={() => console.log("Works like")} >Arrow Function</button>
            <div>
                <span>Input</span>
                <input onChange={getInputProps} />
            </div>
        </div>
    );
}