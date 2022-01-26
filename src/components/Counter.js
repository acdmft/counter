import React from "react";

class Counter extends React.Component {
    render() {
        return (
            <div>
                <h2>Count: {this.props.count}</h2>
                <div className="btn-wrapper">
                    <button onClick={this.props.substract}>
                        -
                    </button>
                    <button onClick={this.props.increment}>
                        +
                    </button>
                </div>
            </div>
        );
    }
}

export default Counter;