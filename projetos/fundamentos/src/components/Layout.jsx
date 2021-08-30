import Link from "next/link";
import styles from "../styles/Layout.module.css";
import CabecalhoProps from "./CabecalhoProps";

export default function Layout(props) {
    return (
        <div className={styles.layout}>
            <div className={styles.cabecalho}>
                <CabecalhoProps title={props.title ?? "Mais um Componente"}/>
                <Link href="/">Voltar</Link>
            </div>
            <div className={styles.conteudo}>
                {props.children}
            </div>
        </div>
    );
}