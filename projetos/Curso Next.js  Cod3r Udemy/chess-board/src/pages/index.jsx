import styles from "../styles/ChessBoard.module.css";
import FirstLine from "../components/FirstLine";
import SecondLine from "../components/SecondLine";

export default function ChessBoard() {
    return (
        <div className={styles.container}>
            <FirstLine />
            <SecondLine />
            <FirstLine />
            <SecondLine />
            <FirstLine />
            <SecondLine />
            <FirstLine />
            <SecondLine />
        </div>
    )
}