import styles from "../styles/ChessBoard.module.css";

export default function SecondLine() {
    return (
        <>
            <div className={styles.elementsBlack} />
            <div className={styles.elementsWhite} />
            <div className={styles.elementsBlack} />
            <div className={styles.elementsWhite} />
            <div className={styles.elementsBlack} />
            <div className={styles.elementsWhite} />
            <div className={styles.elementsBlack} />
            <div className={styles.elementsWhite} />
        </>
    )
}