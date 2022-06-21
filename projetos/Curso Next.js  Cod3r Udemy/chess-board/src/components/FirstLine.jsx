import styles from "../styles/ChessBoard.module.css";

export default function FirstLine() {
    return (
        <>
            <div className={styles.elementsWhite} />
            <div className={styles.elementsBlack} />
            <div className={styles.elementsWhite} />
            <div className={styles.elementsBlack} />
            <div className={styles.elementsWhite} />
            <div className={styles.elementsBlack} />
            <div className={styles.elementsWhite} />
            <div className={styles.elementsBlack} />
        </>
    )
}