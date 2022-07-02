import { ReactElement } from "react";
import style from "../../styles/Card.module.css";

interface CardProps {
    bgColor?: string;
    children?: ReactElement
}

export default function Card({ bgColor, children }: CardProps) {
    return (
        <div className={style.container} style={{backgroundColor: bgColor ?? "#fff"}}>
            {children}
        </div>
    )
}