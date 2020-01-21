import React from "react";
import "./App.css";
import { oauth2 as SMART } from "fhirclient";
import PatientInfo from "./components/patient";
import Medication from "./components/medication";
import Condition from "./components/condition";
import configurations from "./data/configurations";

class App extends React.Component {
  smartKey;

  constructor(props) {
    super(props);
    this.updatePatient = this.updatePatient.bind(this);

    this.state = {
      patient: null,
      loadingPatient: false
    };

    if (props.smartKey !== null) {
      SMART.ready()
        .then(client => client.patient.read())
        .then(
          patient => {
            console.log("patient", patient);
            this.updatePatient(this.getPatientDetails(patient));
          },
          error => {
            console.error(error);
          }
        )
        .catch(console.error);
    }
    this.handlePatientChange = this.handlePatientChange.bind(this);
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
        <div
          className="navbar bg-dark text-light col-lg-12 pl-2"
          style={{ backgroundColor: "#005693" }}
        >
          <h4>React FHIR Test App</h4>
        </div>
        <PatientInfo
          patient={this.state.patient}
          onHandlePatientChange={this.handlePatientChange}
          loading={this.state.loadingPatient}
        />
        <div className="col-lg-8 p-2">
          <Medication
            patientId={this.state.patient ? this.state.patient.Id : 0}
          />
        </div>
        <Condition patientId={this.state.patient ? this.state.patient.Id : 0} />
      </div>
    );
  }

  handlePatientChange = e => {
    this.setState({ loadingPatient: true });
    fetch(configurations.baseURL + "/Patient/Id/" + e.target.value)
      .then(response => response.json().then(this.updatePatient))
      .catch(e => {
        this.updatePatient(null);
        console.log(`error fetching patient`, e);
      });
  };

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
    this.setState({ patient: p, loadingPatient: false });
  }
}

export default App;
