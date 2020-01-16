import React from "react";

class Diagnosis extends React.Component {
  state = {};
  render() {
    return (
      <div className="col-lg-12 p-2 border bg-secondary text-light mt-2 d-flex justify-content-between">
        <span>Diagnosis</span>
        <button className="btn btn-dark btn-sm">Load Data</button>
      </div>
    );
  }
}

export default Diagnosis;
