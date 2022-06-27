export default function OnlyEven(props) {
    //Mesmo resultado com ternário
    // const isEvenNumber = props.number % 2 === 0;
    
    // return isEvenNumber ? <h1>Número {props.number} é Par!</h1> : null;

    if (props.number % 2 === 0) {
        return <h1>Número {props.number} é Par!</h1>
    } else {
        return null;
    }
}