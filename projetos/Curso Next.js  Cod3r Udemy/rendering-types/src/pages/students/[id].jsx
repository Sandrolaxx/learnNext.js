export async function getStaticPaths() {
    const resp = await fetch("http://localhost:3000/api/students/tutors");
    const ids = await resp.json();

    const paths = ids.map(id => (
        { params: { id: id.toString() } })
    );

    return {
        fallback: true,//true ele tenta gerar a página com os parâmetros informados e false retorna 404 caso não seja um id mapeado
        paths
    }
}

export async function getStaticProps(context) {//Se refere aos dados de quem o chamou, no caso 3 vezes o getStaticPaths, uma vez para cada página
    const resp = await fetch(`http://localhost:3000/api/students/${context.params.id}`);
    const student = await resp.json();

    return {
        props: {
            student
        }
    }
}

export default function StudentById(props) {
    const { student } = props;

    return (
        <div>
            <h1>Detalhes do Aluno</h1>
            {student ?
                <ul key={student.studentId}>
                    <h2>Id: {student.studentId}</h2>
                    <h2>Nome: {student.name}</h2>
                    <h2>E-mail: {student.email}</h2>
                </ul>
                :
                false
            }
        </div>
    )
}