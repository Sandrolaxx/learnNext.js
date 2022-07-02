import { useEffect, useState } from "react";
import Link from "../../../../node_modules/next/link";
import { useRouter } from "../../../../node_modules/next/router";
import DoorModel from "../../../model/DoorModel";
import style from "../../../styles/Game.module.css";
import { createDoors, handleUptdateDoors } from "../../../utils/util";
import Door from "../../components/Door";

export default function game() {
    const router = useRouter();
    const [isValid, setValid] = useState(false);
    const [doors, setDoors] = useState<DoorModel[]>();

    useEffect(() => {
        const doorsQuantity = router.query.props ? Number.parseInt(router.query.props[0]) : null;
        const rewardDoor = router.query.props ? Number.parseInt(router.query.props[1]) : null;

        if (doorsQuantity != null
            && rewardDoor != null) {
            const validDoorsQuantity = doorsQuantity >= 3 && doorsQuantity <= 60;
            const validRewardDoor = rewardDoor >= 1 && rewardDoor <= doorsQuantity;

            setValid(validDoorsQuantity && validRewardDoor);
        }

    }, [doors]);

    useEffect(() => {
        const doorsQuantity = router.query.props ? Number.parseInt(router.query.props[0]) : null;
        const rewardDoor = router.query.props ? Number.parseInt(router.query.props[1]) : null;

        if (doorsQuantity != null
            && rewardDoor != null) {
            setDoors(createDoors(doorsQuantity, rewardDoor));
        }

    }, [router.query]);

    function updateDoors(newDoor: DoorModel) {
        setDoors(handleUptdateDoors(doors, newDoor))
    }

    return (
        doors &&
        <div className={style.container}>
            {isValid ?
                <div className={style.doors}>
                    {doors.length &&
                        doors.map(door => (
                            <Door key={door.getNumber()} door={door} onChange={newDoor => updateDoors(newDoor)} />
                        ))
                    }
                </div>
                :
                <h2>Valores Inválidos!</h2>
            }
            <div className={style.buttons}>
                <Link href="/" >
                    <button>
                        Reiniciar Jogo
                    </button>
                </Link>
            </div>
        </div>
    )
}