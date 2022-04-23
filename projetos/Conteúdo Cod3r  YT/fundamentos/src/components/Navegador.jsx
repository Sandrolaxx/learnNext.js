import Link from "next/link";
import styles from "../styles/Navegador.module.css";

export default function Navegador(props) {
    return (
        <div className={styles.navegador} style={{
            backgroundColor: props.corBtn ?? 'dodgerblue'
        }}>
            <Link href={props.rota}>
                {props.nomeRota}
            </Link>
        </div>
    );
}