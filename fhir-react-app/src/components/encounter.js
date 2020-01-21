import React, { Component } from "react";
import configurations from "./../data/configurations";

class Encounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      encounters: null
    };
  }

  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="col-lg-12 p-2 border bg-dark text-light mt-2 d-flex justify-content-between">
          <span>Encounter</span>
          <button className="btn btn-dark btn-sm">Load Data</button>
        </div>
        {this.state.encounters && this.renderTable()}
      </React.Fragment>
    );
  }

  updateState(s) {
    this.setState({ encounters: s });
  }

  handleLoadData = () => {
    console.log("Loading encounter data!");
    fetch(configurations.baseURL + "/Encounter").then(
      res => this.udpateState(res),
      error => {
        console.log("fetch encounter failed", error);
        this.updateState(SampleEncounterModel);
      }
    );
  };

  renderTable() {
    return <div className="col-lg-12 p-0">Nothing here</div>;
  }
}

export default Encounter;
