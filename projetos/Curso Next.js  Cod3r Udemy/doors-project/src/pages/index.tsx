import { useRouter } from "../../node_modules/next/router"
import Card from "./components/Card";
import style from "../styles/Form.module.css";
import Link from "../../node_modules/next/link";
import NumericEntry from "./components/NumericEntry";
import { useState } from "react";

export default function Form() {
    const [doorsQuantity, setDoorsQuantity] = useState(3);
    const [rewardDoorNumber, setRewardDoorNumber] = useState(1);

    return (
        <div className={style.container}>
            <div>
                <Card bgColor="#01886b">
                    <h1>
                        Monty Hall
                    </h1>
                </Card>
                <Card>
                    <NumericEntry text="Quantidade Portas?" value={doorsQuantity}
                        onChange={quantity => setDoorsQuantity(quantity)} />
                </Card>
            </div>
            <div>
                <Card>
                    <NumericEntry text="Porta com Prêmio?" value={rewardDoorNumber}
                        onChange={number => setRewardDoorNumber(number)} />
                </Card>
                <Card bgColor="#01c79c">
                    <Link href={`game/${doorsQuantity}/${rewardDoorNumber}`}>
                        <h2 className={style.link}>Iniciar</h2>
                    </Link>
                </Card>
            </div>
        </div>
    )
}
