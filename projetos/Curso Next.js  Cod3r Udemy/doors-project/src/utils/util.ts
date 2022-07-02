import DoorModel from "../model/DoorModel";

export function createDoors(quantity: number, selectedDoorNumber: number): DoorModel[] {
    //Criar um array de numeros com base em um tamanho
    //Array.from({length: 10}, (_, i) => i + 1)
    return Array.from({length: quantity}, (_, i) => {
        const number = i + 1;
        const hasAward = number === selectedDoorNumber;

        return new DoorModel(number, hasAward);
    })
}

export function handleUptdateDoors(doors: DoorModel[], selectedDoor: DoorModel): DoorModel[] {
    return doors.map(door => {
        const equalsSelected = door.getNumber() === selectedDoor.getNumber();

        return equalsSelected ? selectedDoor : selectedDoor.isOpen() ? door : door.deselect();
    });
}