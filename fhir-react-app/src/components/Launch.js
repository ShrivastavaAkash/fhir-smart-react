import React from 'react';
import FHIR from 'fhirclient';

class App extends React.Component {


    constructor (props) {
        super(props);

        console.log(FHIR);

        FHIR.oauth2.authorize({
            'client_id': 'ba2b34f9-2f17-4858-b5f9-6a5b3312e26a',
            'scope':  'patient/Patient.read patient/MedicationRequest.read launch online_access openid profile'
        });
    } 


    render () {
        return <div className="App">
                {window.location.href}
                'client_id': 'ba2b34f9-2f17-4858-b5f9-6a5b3312e26a'
            </div>;
    }
}

export default App;
