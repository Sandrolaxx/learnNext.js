import style from "../../styles/NumericEntry.module.css";

interface NumericEntryProps {
    text: string;
    value: number;
    onChange: Function;
}

export default function NumericEntry({ text, value, onChange}: NumericEntryProps) {
    
    function decrement() {
        onChange(value - 1);
    }
    
    function increment() {
        onChange(value + 1);
    }
    
    return (
        <div className={style.container}>
            <span className={style.text}>{text}</span>
            <span className={style.value}>{value}</span>
            <div className={style.buttons}>
                <button className={style.btn} onClick={decrement}>-</button>
                <button className={style.btn}onClick={increment}>+</button>
            </div>
        </div>
    )
}