import React from "react";

class PatientInfo extends React.Component {
  render() {
    console.log("patient Info ", this.props.patient);

    return (
      <div className="col-lg-4 patient-info p-2">
        <div className="row col-lg-12 col-md-12">
          <h4 className="col-lg-12 p-2 bg-secondary text-light mb-0 border-0 mt-2">
            Patient Information
          </h4>
          <ul className="col p-0 m-0">
            <li className="row p-3 border text-left no-gutters">
              <span className="col-lg-3 text-left font-weight-bold">Name</span>
              {this.props.patient.Name}
            </li>
            <li className="row p-3 border text-left no-gutters">
              <span className="col-lg-3 text-left font-weight-bold">
                Gender
              </span>
              {this.props.patient.Gender}
            </li>
            <li className="row p-3 border text-left no-gutters">
              <span className="col-lg-3 text-left font-weight-bold">
                Addresses
              </span>
              {Array.isArray(this.props.patient.Addresses)
                ? this.props.patient.Addresses.map(this.formatAddress)
                : "N/A"}
            </li>
            <li className="row p-3 border text-left no-gutters">
              <span className="col-lg-3 text-left font-weight-bold">
                Active
              </span>
              {this.props.patient.Active ? "Yes" : "No"}
            </li>
            <li className="row p-3 border text-left no-gutters">
              <span className="col-lg-3 text-left font-weight-bold">
                Birth Date
              </span>
              {this.props.patient.BirthDate}
            </li>
            <li className="row p-3 border text-left no-gutters">
              <span className="col-lg-3 text-left font-weight-bold">Phone</span>
              {Array.isArray(this.props.patient.Phone)
                ? this.props.patient.Phone.map(p => (
                    <React.Fragment>
                      {`${p.Number} (${p.Type})`}
                      <br />
                    </React.Fragment>
                  ))
                : "N/A"}
            </li>
            <li className="row p-3 border text-left no-gutters">
              <span className="col-lg-3 text-left font-weight-bold">
                Emergency Contacts
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
        </div>
      </div>
    );
  }

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
    }${City}, ${State}, ${PostalCode}, ${Country} [${Type}]`;
}

export default PatientInfo;
