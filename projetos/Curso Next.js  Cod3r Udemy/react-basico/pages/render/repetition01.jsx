export default function repetition01() {
    const listaAprovados = [
        "Clebér",
        "Sandrolax",
        "Gavriellix",
        "Osmar",
        "Fernanda",
    ]

    return(
        <ul>
            {
                listaAprovados.map((element, i) => (
                    <li key={i}>{element}</li>
                ))
            }
        </ul>
    );
}