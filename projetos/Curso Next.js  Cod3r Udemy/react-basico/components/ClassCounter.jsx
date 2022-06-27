import { Component } from "react";

export default class ClassCounter extends Component {

    state = {
        iteratedValue: 0,
        counterIn: this.props.counterIn ?? 1
    }

    increment = () => {
        this.setState({ iteratedValue: this.state.iteratedValue + this.state.counterIn });
    }

    decrement = () => {
        this.setState({ iteratedValue: this.state.iteratedValue - this.state.counterIn });
    }

    render() {
        return (
            <div className="default">
                <h1>Contador😸</h1>
                <h4>Incrementando de {this.state.counterIn} em {this.state.counterIn}</h4>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <button onClick={this.decrement}>-</button>
                    <h3>Valor: {this.state.iteratedValue}</h3>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
}