import styles from "../Door/Door.module.css";

export default function Door(props) {
    const isSelected = props.selected ? styles.selected : false;

    return (
        <div className={styles.container}>
            <div className={`${styles.doorFrame} ${isSelected}`}>
                <div className={styles.door}>
                    <div className={styles.number}>3</div>
                    <div className={styles.knob}></div>
                </div>
            </div>
            <div className={styles.ground}></div>
        </div>
    )
}