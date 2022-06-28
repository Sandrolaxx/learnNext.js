import { useEffect, useState } from "react"

export default function Question() {
    const [response, setResponse] = useState(null);
    const url = "api/question/47"

    useEffect(() => fetchQuestion, []);

    function fetchQuestion() {
        fetch(url)
            .then(res => res.json())
            .then(json => setResponse(json));
    }

    return (
        <div className="default">
            <h1>Questões</h1>
            {response ?
                <>
                    <h4>Questão {response.id}</h4>
                    <p>{response.enunciado}</p>
                    <ul>
                        {response.respostas.map(res => (
                            <li key={res}>{res}</li>
                        ))}
                    </ul>
                </>
                :
                <h4>Não foi possível carregar as questões!😢</h4>
            }
        </div>
    )
}