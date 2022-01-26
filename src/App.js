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
        <Counter 
          
        >
        </Counter>
        <Counter 
        >
        </Counter>
      </div>
    );
  }
}

export default App;
