import React from "react";

class Counter extends React.Component {
    constructor() {
        super();

        this.state = {
            count: 0
        };
        this.increment = this.increment.bind(this);
        this.substract = this.substract.bind(this);
    }
    increment() {
        this.setState((prevState) => {
          return { count: prevState.count + 1 };
        });
    }
    
    substract() {
        if (this.state.count > 0) {
            this.setState((prevState) => {
            return { count: prevState.count - 1 };  
            });
        }
    }
    

    render() {
        return (
            <div>
                <h2>Count: {this.state.count}</h2>
                <div className="btn-wrapper">
                    <button onClick={this.substract}>
                        -
                    </button>
                    <button onClick={this.increment}>
                        +
                    </button>
                </div>
            </div>
        );
    }
}

export default Counter;