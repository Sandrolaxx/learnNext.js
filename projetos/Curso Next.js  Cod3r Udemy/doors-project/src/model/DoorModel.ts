export default class DoorModel {
    #number: number;
    #hasReward: boolean;
    #selected: boolean;
    #open: boolean;

    constructor(number: number, hasReward = false, selected = false, open = false) {
        this.#number = number;
        this.#hasReward = hasReward;
        this.#selected = selected;
        this.#open = open;
    }

    getNumber() {
        return this.#number;
    }

    isHasReward() {
        return this.#hasReward;
    }

    isSelected() {
        return this.#selected;
    }

    isOpen() {
        return this.#open;
    }

    //Methods
    deselect() {
        const selected = false;

        return new DoorModel(this.getNumber(), this.isHasReward(), selected, this.isOpen());
    }

    alterSelection() {
        const selected = !this.isSelected();

        return new DoorModel(this.getNumber(), this.isHasReward(), selected, this.isOpen());
    }

    open() {
        const open = true;

        return new DoorModel(this.getNumber(), this.isHasReward(), this.isSelected(), open);
    }

}