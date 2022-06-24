import { Component } from "react";
import ClassCounter from "../../components/ClassCounter";

export default class classComponent extends Component {

    render() {
        return (
            <div className="default">
                <ClassCounter counterIn={5} />
                <ClassCounter />
            </div>
        )
    }
}