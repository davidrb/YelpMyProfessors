import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import SearchExampleStandard from './Search';

class PageOne extends React.Component {
  render() {
    return (<div>
       <header className="App-header">
      YelpMyProfessors

      
      </header>
        <p>Page One</p>
    </div>);
  }
}

class PageTwo extends React.Component {
  render() {
    return (
    <div>
      <header className="App-header">
      YelpMyProfessors
      </header>
      <p>Page Two</p>
    </div>);
  }
}

export class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "PageOne"
    };
  }

  render() {
    if (this.state.page === "PageOne") {
      return (
      <div>
        <PageOne />
        <button onClick={() => this.setState({page: "PageTwo"})}>Page Two</button>
      </div>)
    }

    return (
      <div>
        <PageTwo />
        <button onClick={() => this.setState({page: "PageOne"})}>Page One</button>
      </div>
    )
  }
}