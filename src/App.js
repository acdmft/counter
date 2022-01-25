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
  render () {
    return (
      <div>
        <Component 
        count={this.state.count}
        increment ={() => {this.setState({count: this.count+1})}>
        </Component>
      </div>
    );
  }
}

export default App;
