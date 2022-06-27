import { useState } from "react";
import { handleGenerateBet } from "../../utils/util";

export default function megaSena() {
    const [randomValues, setRandomValues] = useState(new Array());
    const [betSize, setBetSize] = useState(6);

    return (
        <div className="default">
            <h1>Gerador Apostas</h1>
            {
                randomValues.map((n, i) => (
                    <h3 key={i}>{n}</h3>
                ))
            }
            <h4>Quantidade Números</h4>
            <input type="number" value={betSize} min={6} max={12}
                onChange={e => setBetSize(e.target.value)} />
            <button onClick={() => setRandomValues(handleGenerateBet(betSize))} >Gerar Aposta</button>
        </div>
    );
}