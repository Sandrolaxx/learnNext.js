import If from "../../components/If";

export default function conditional02() {
    const firstNumber = 4;
    const secondNumber = 5;
    
    return (
        <div>
            <If condition={firstNumber % 2 === 0} >
                <p>O número {firstNumber} é Par!</p>
            </If>
            <If condition={secondNumber % 2 === 1} >
                <p>O número {secondNumber} é Ímpar!</p>
            </If>
        </div>
    );
}