import React from "react";
import configurations from "./../data/configurations";
import "./common.css";

class Medication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      medication: null,
      loading: true
    };

    this.updateData = this.updateData.bind(this);
    this.updateState = this.updateState.bind(this);
    this.updateData();
  }

  componentDidMount() {
    window.UpdateMedication = function(a) {
      this.updateState(a);
    }.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.patientId != this.props.patientId) this.updateData();
  }

  render() {
    console.log("medication render");
    return (
      this.state.medication &&
      Array.isArray(this.state.medication) &&
      this.state.medication.length > 0 && (
        <React.Fragment>
          <div
            className={
              "col-lg-12 p-2 bg-dark text-light d-flex justify-content-between shadow " +
              (this.state.loading ? "load" : "")
            }
          >
            <span>Medication</span>
          </div>
          {this.state.medication && this.renderTable()}
        </React.Fragment>
      )
    );
  }

  updateData = () => {
    if (this.props.patientId == 0) return;
    this.setState({ loading: true });
    console.log("Loading medication data!");
    fetch(
      configurations.baseURL +
        "/MedicationRequest/Patient/" +
        this.props.patientId
    ).then(
      res => res.json().then(this.updateState),
      error => {
        console.log("fetch medication failed", error);
        this.updateState(null);
      }
    );
  };

  updateState(s) {
    console.log("update state medication");
    this.setState({ medication: s, loading: false });
  }

  renderTable() {
    return (
      <div
        className={
          "table-responsive col-lg-12 p-0 " +
          (this.state.loading ? "invisible" : "")
        }
        style={{ fontSize: 14, maxHeight: "35vh" }}
      >
        <table className="table table-striped table-sm table-hover m-0">
          <thead>
            <tr className="row m-0 sticky-top bg-light">
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
