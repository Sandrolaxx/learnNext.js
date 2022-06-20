export default function TitleWithProps(props) {
    return (
        <>
            <h1>
                {props.title}
            </h1>
            <p>{props.subTitle}</p>
        </>
    );
}