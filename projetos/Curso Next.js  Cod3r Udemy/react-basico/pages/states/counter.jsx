import { useState } from "react";

export default function counter() {
    const [value, setValue] = useState(0);

    function increment() {
        setValue(value + 1);
    }

    function decrement() {
        setValue(value - 1);
    }

    return (
        <div className="default">
            <h1>Contador😸</h1>
            <div style={{display: "flex", flexDirection: "row"}}>
                <button onClick={decrement}>-</button>
                <h3>Valor: {value}</h3>
                <button onClick={increment} >+</button>
            </div>
        </div>
    )

}