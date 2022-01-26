import React from 'react';
import Counter from './components/Counter';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
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

  render () {
    return (
      <div>
        <Counter 
          count={this.state.count}
          substract = {this.substract}
          increment = {this.increment}
        >
        </Counter>
      </div>
    );
  }
}

export default App;
