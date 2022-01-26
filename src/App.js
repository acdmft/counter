import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <h2>{this.state.count}</h2>
        <div className="btn-wrapper">
          <button
            onClick={() => {
              this.setState((prevState) => {
                return { count: prevState.count - 1,};
              });
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              this.setState((prevState) => {
                return { count: prevState.count + 1,};
              });
            }}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default App;
