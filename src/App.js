import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'world'
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello from React, { this.state.name }!</h1>
          <div className="container">
            <div className="col">
              <input type="text" value={this.state.name} onInput={(e) => this.setState( { name: e.target.value })} />
            </div>
            <div className="col">
              <input type="text" value={this.state.name} onInput={(e) => this.setState( { name: e.target.value })} />
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default App