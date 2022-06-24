interface componentProps {
    name: string;
    idade?: number;
}

export default function TsComponent(props: componentProps) {
    return(
        <>
            <h4>Nome: {props.name}</h4>
            <h4>Nome: {props.idade ?? 'Não informada'}</h4>
        </>
    );
}