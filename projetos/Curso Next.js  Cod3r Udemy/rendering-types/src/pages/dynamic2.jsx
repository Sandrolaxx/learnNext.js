export async function getServerSideProps() {
    const resp = await fetch("http://localhost:3000/api/products");
    const products = await resp.json();

    return {
        props: {
            products
        }
    }
}

export default function Static4(props) {
    return (
        <div>
            <h1>Dinâmico - 02</h1>
            {props.products &&
                props.products.map(p => (
                    <ul key={p.id}>
                        <li>{p.id} - Produto {p.name} com o preço {p.price}</li>
                    </ul>
                ))
            }
        </div>
    )
}