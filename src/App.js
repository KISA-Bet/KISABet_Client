import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to KISA-Betting</h1>
        </header>
        <p className="App-intro">
          Bet 1 ethers, win 4 ethers and contribute to the most efficient non-profit in the world
        </p>
        <div className="App-container">
          <p>How to play:</p>
          <p>1. Send 1 Ethereum (exact) to address " 0x3fcdcea917a1342648badf4cb976740c2ea5db9f " (TESTNET Ropsten at the moment)</p>
          <p>2. After 5 people have sent their bets, the contract chooses one address at random and pays 80 % of the total payout available to the winner</p>
          <p>3. The rest goes to: 
            <a href="https://www.givedirectly.org/">GiveDirectly</a>
          </p>
          <p>4. The game restarts</p>
          <p>5. sourcecode:
          <a href="https://github.com/KISA-Bet">Github</a>
          </p>
          <p></p>
          <p>The number of sign ups so far is 5</p>
        </div>
      </div>
    );
  }
};

export default App;
