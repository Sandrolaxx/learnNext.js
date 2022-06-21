import listaProdutos from "../../data/listaProdutos";

export default function repetition02() {
    return (
        <div>
            <table style={{border: "1px solid #000" }}>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {listaProdutos.map(produto => (
                        <tr key={produto.id}>
                            <td style={{border: "1px solid #000" }}>{produto.id}</td>
                            <td style={{border: "1px solid #000" }}>{produto.nome}</td>
                            <td style={{border: "1px solid #000" }}>{produto.preco}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}