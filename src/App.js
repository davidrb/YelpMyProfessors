import React from 'react';
import logo from './logo.svg';
import './App.css';

class LandingPage extends React.Component() {
  constructor(props) {
    super(props);

    this.state = {
      page: "Home"
    };
  }

  render() {
    if (this.state === "Home") {
      return (<Home></Home>);
    } else if (this.state === "About") {
      return (<About></About>);
    }

    return (
      <div className="LandingPage">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );

  }
}


class LoginPage extends React.Component()
{


}

export default LandingPage;
