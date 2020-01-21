import React from "react";
import patientList from "../data/patient-list";

class PatientInfo extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div className={"col patient-info " + (this.props.loading ? "load" : "")}>
        <div className={"row col-lg-12 col-md-12 no-gutters p-0 border-right "}>
          <h4 className="col-lg-12 pl-2 bg-secondary text-light mb-0 border-0 mt-2 row p-1">
            <span className="col-lg-6">Patient Information</span>
            <select
              className="form-control col-lg-6 bg-dark text-light"
              onChange={this.handleChange}
            >
              <option disabled selected>
                -- Select Patient --
              </option>
              {patientList.map(v => (
                <option value={v.id}>{v.name}</option>
              ))}
            </select>
          </h4>
          {!this.props.patient && (
            <div className="text-secondary p-3">Nothing to show</div>
          )}
          {this.props.patient && (
            <ul
              className={
                "col p-0 m-0 " + (this.props.loading ? "invisible" : "")
              }
            >
              <li className="row px-3 py-2 border-bottom text-left no-gutters">
                <span className="col-lg-3 text-left font-weight-bold">
                  Name
                </span>
                {this.props.patient.Name}
              </li>
              <li className="row px-3 py-2 border-bottom text-left no-gutters">
                <span className="col-lg-3 text-left font-weight-bold">
                  Gender
                </span>
                {this.props.patient.Gender}
              </li>
              <li className="row px-3 py-2 border-bottom text-left no-gutters">
                <span className="col-lg-3 text-left font-weight-bold">
                  Addresses
                </span>
                <textarea className="form-control w-75">
                  {Array.isArray(this.props.patient.Addresses)
                    ? this.props.patient.Addresses.map(this.formatAddress)
                    : "N/A"}
                </textarea>
              </li>
              <li className="row px-3 py-2 border-bottom text-left no-gutters">
                <span className="col-lg-3 text-left font-weight-bold">
                  Active
                </span>
                {this.props.patient.Active ? "Yes" : "No"}
              </li>
              <li className="row px-3 py-2 border-bottom text-left no-gutters">
                <span className="col-lg-3 text-left font-weight-bold">
                  Birth Date
                </span>
                {this.props.patient.BirthDate}
              </li>
              <li className="row px-3 py-2 border-bottom text-left no-gutters">
                <span className="col-lg-3 text-left font-weight-bold">
                  Phone
                </span>
                {Array.isArray(this.props.patient.Phone)
                  ? this.props.patient.Phone.map(p => (
                      <React.Fragment>
                        {`${p.Number} (${p.Type})`}
                        <br />
                      </React.Fragment>
                    ))
                  : "N/A"}
              </li>
              <li className="row px-3 py-2 border-bottom text-left no-gutters">
                <span className="col-lg-3 text-left font-weight-bold">
                  Contacts
                </span>
                {Array.isArray(this.props.patient.EmergencyContacts)
                  ? this.props.patient.EmergencyContacts.map(v => (
                      <React.Fragment>
                        {`${v.Name} (${v.RelationShip})`}
                        <br />
                      </React.Fragment>
                    ))
                  : "N/A"}
              </li>
            </ul>
          )}
        </div>
      </div>
    );
  }

  handleChange = e => {
    this.props.onHandlePatientChange(e);
  };

  formatAddress = ({
    Street1,
    Street2,
    City,
    State,
    PostalCode,
    Country,
    Type
  }) =>
    `${Street1}, ${
      Street2 ? Street2 + ", " : ""
    }${City}, ${State}, ${PostalCode}, ${Country} [${Type}]\n`;
}

export default PatientInfo;
