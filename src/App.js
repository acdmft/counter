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
  }
  
  decreaseCount = () => { this.setState({count: this.state.count - 1 });}
  increaseCount = () => { this.setState({count: this.state.count + 1 });}

  render () {
    return (
      <div>
        <Counter 
        count={this.state.count}
        substract = {this.decreaseCount}
        increment = {this.increaseCount}
        >
        </Counter>
      </div>
    );
  }
}

export default App;
