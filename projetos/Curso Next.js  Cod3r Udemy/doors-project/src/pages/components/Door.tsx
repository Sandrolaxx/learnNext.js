import DoorModel from "../../model/DoorModel";
import styles from "../../styles/Door.module.css";
import Reward from "./Reward";

interface DoorProps {
    door: DoorModel,
    onChange: (newDoor: DoorModel) => void;
}

export default function Door({ door, onChange }: DoorProps) {
    const isSelected = door.isSelected() && !door.isOpen() ? styles.selected : false;

    function alterSelection() {
        onChange(door.alterSelection());
    }

    function openDoor(event) {
        event.stopPropagation();

        onChange(door.open());
    }

    return (
        <div className={styles.container} onClick={alterSelection}>
            <div className={`${styles.doorFrame} ${isSelected}`}>
                {door.isOpen() ?
                    door.isHasReward() ?
                        <Reward />
                        :
                        false
                    :
                    <div className={styles.door}>
                        <div className={styles.number}>{door.getNumber()}</div>
                        <div className={styles.knob} onClick={event => openDoor(event)} ></div>
                    </div>
                }
            </div>
            <div className={styles.ground}></div>
        </div>
    )
}