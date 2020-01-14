import React from 'react';
import logo from './logo.svg';
import './App.css';
import FHIR from 'fhirclient';

class App extends React.Component {

  constructor (props) {
    super(props);
    console.log(FHIR);

    // FHIR.oauth2.ready()
    // .then(client => client.request("Patient"))
    // .then(console.log)
    // .catch(console.error);

    FHIR.oauth2.authorize({
      'client_id': 'ba2b34f9-2f17-4858-b5f9-6a5b3312e26a',
      'scope':  'patient/Patient.read patient/Observation.read launch online_access openid profile'
    });
  } 

  render () {
    return <div className="App">
            {window.location.href}
          </div>;
  }
}

export default App;
