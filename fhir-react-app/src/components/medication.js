import React from "react";
import configurations from "./../data/configurations";
import SampleMedicationModel from "./../data/sampleMedicationModel";

class Medication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      medication: null
    };
  }

  componentDidMount() {
    window.UpdateMedication = function(a) {
      this.updateState(a);
    }.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-lg-12 p-2 border bg-secondary text-light mt-4 d-flex justify-content-between">
          <span>Medication</span>
          <button onClick={this.handleLoadData} className="btn btn-dark btn-sm">
            Load Data
          </button>
        </div>
        {this.state.medication && this.renderTable()}
      </React.Fragment>
    );
  }

  handleLoadData = () => {
    console.log("Loading medication data!");
    fetch(configurations.baseURL + "/Medication").then(
      res => this.udpateState(res),
      error => {
        console.log("fetch medication failed", error);
        this.updateState(SampleMedicationModel);
      }
    );
  };

  updateState(s) {
    this.setState({ medication: s });
  }

  renderTable() {
    return (
      <div className="table-responsive col-lg-12 p-0">
        <table className="table table-striped table-sm table-hover">
          <thead>
            <tr className="row m-0">
              <th className="col">Medication</th>
              <th className="col">Status</th>
              <th className="col">DoseQuantity</th>
              <th className="col">DoseUnits</th>
              <th className="col">EffectiveDate</th>
              <th className="col">ReasonGiven</th>
              <th className="col">ReasonNotGiven</th>
              <th className="col">Route</th>
              <th className="col">WasGiven</th>
            </tr>
          </thead>
          <tbody>
            {this.state.medication.map(v => (
              <tr className="row m-0">
                <td className="col">{v.Medication}</td>
                <td className="col">{v.Status}</td>
                <td className="col">{v.DoseQuantity}</td>
                <td className="col">{v.DoseUnits}</td>
                <td className="col">
                  {new Date(v.EffectiveDate).toDateString()}
                </td>
                <td className="col">{v.ReasonGiven}</td>
                <td className="col">{v.ReasonNotGiven}</td>
                <td className="col">{v.Route}</td>
                <td className="col">{v.WasGiven ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Medication;
