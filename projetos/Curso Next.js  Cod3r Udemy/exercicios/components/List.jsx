export default function List(props) {
    return (
        <div>
            <h2>Lista de elementos filhos:</h2>
            <ul>
                {props.children}
            </ul>
        </div>
    );
}