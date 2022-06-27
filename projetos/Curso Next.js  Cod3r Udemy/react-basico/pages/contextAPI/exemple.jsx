import { useAuth } from "../../providers/auth"

export default function usingContext() {
    const { data, setData } = useAuth();

    return(
        <div className="default">
            <h1>Nome presente no contexto: {data.name}</h1>
            <hr />
            <h4>Insira um nome para modificar a variavél do contexto:</h4>
            <input type="text" onChange={e => setData({name: e.target.value})} />
        </div>
    )
}