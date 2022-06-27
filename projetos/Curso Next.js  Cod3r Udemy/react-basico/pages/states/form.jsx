import { useState } from "react";

export default function form() {
    const [value, setValue] = useState("Impossível Alterar o Valor do Input");

    return (
        <div className="default">
            <h1>Formulário</h1>
            <input type="text" value={value} />
        </div>
    );
}