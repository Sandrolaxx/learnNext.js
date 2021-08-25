export default function Jsx() {
    const jsxArmazenado = <h1>Hello World🔥</h1>;
    
    function funcaoJs() {
        return <h2>{"JSX on 🔥".toUpperCase()}</h2>;
    }

    return (
        <div>
            {jsxArmazenado}
            {funcaoJs()}
            <p>
                {JSON.stringify({nome: 'Sandolax', idade: 22})}
            </p>
        </div>
    );
}