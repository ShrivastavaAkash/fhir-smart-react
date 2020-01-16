import React from "react";
import "./App.css";
import { oauth2 as SMART } from "fhirclient";
import PatientInfo from "./components/PatientInfo/PatientInfo";
import SamplePatientData from "./data/samplePatientData";
import Diagnosis from "./components/diagnosis";
import Medication from "./components/medication";

class App extends React.Component {
  smartKey;

  constructor(props) {
    super(props);
    this.updatePatient.bind(this);

    if (props.smartKey == null) {
      this.state = {
        patient: this.getPatientDetails(SamplePatientData)
      };
    } else {
      this.state = {
        patient: null
      };

      SMART.ready()
        .then(client => client.patient.read())
        .then(
          patient => {
            console.log("patient", patient);
            this.updatePatient(this.getPatientDetails(patient));
            //this.meds = meds;
          },
          error => {
            console.error(error);
          }
        )
        .catch(console.error);
    }
  }

  // UI loaded
  componentDidMount() {
    window.UpdatePatient = function(a) {
      this.updatePatient(a);
    }.bind(this);
  }

  render() {
    return (
      <div className="container-fluid p-0 justify-content-start row no-gutters">
        <div className="navbar bg-dark text-light col-lg-12">
          <h4>React FHIR Test App</h4>
        </div>
        {this.state.patient && <PatientInfo patient={this.state.patient} />}
        {!this.state.patient && (
          <div>Waiting for information to load ... !</div>
        )}
        {this.state.patient && (
          <div className="col-lg-8 mt-2 px-2">
            <Diagnosis />
            <Medication />
          </div>
        )}
      </div>
    );
  }

  retreivePhone = ({ value, use }) => ({ Number: value, Type: use });
  retreiveAddress = ({ use, line, city, state, postalCode, country }) => ({
    Street1: line ? line[0] : "",
    Street2: line ? line[1] : "N/A",
    City: city,
    State: state,
    PostalCode: postalCode,
    Country: country,
    Type: use
  });
  retreiveContacts = ({ relationship, name, telecom, address }) => ({
    Email: "N/A",
    Name: name.text,
    Phones: telecom ? telecom.map(this.retreivePhone) : "N/A",
    RelationShip: relationship ? relationship[0].text : "N/A",
    Address: address ? this.retreiveAddress(address) : "N/A"
  });

  getPatientDetails = patient => ({
    Name: patient.name
      ? patient.name.find(v => v.use == "official").text
      : "N/A",
    Gender: patient.gender,
    Addresses: patient.address
      ? patient.address.map(this.retreiveAddress)
      : "N/A",
    Active: patient.active,
    BirthDate: patient.birthDate,
    Phone: patient.telecom ? patient.telecom.map(this.retreivePhone) : "N/A",
    EmergencyContacts: patient.contact
      ? patient.contact.map(this.retreiveContacts)
      : "N/A"
  });

  updatePatient(p) {
    this.setState({ patient: p });
  }
}

export default App;
