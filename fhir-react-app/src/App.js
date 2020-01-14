import React from 'react';
import logo from './logo.svg';
import './App.css';
import FHIR from 'fhirclient';

class App extends React.Component {

  constructor (props) {
    super(props);
    console.log(FHIR);

    FHIR.oauth2.ready()
    .then(client => client.request("Patient"))
    .then(console.log)
    .catch(console.error);
  } 

  render () {
    return <div className="App">
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
          </div>;
  }
}

export default App;