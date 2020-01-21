import React, { Component } from "react";
import ConditionBase from "./conditionBase";
import configurations from "../data/configurations";

class Condition extends Component {
  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
    this.state = {
      condition: {
        Diagnoses: null,
        Problems: null
      },
      loading: true
    };
    this.updateData = this.updateData.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.patientId !== this.props.patientId) this.updateData();
  }

  render() {
    console.log("condition render");
    return (
      this.state.condition &&
      (this.state.condition.Diagnoses || this.state.condition.Problems) && (
        <React.Fragment>
          <div
            className={
              "col-lg-12 p-2 bg-dark text-light d-flex justify-content-between shadow " +
              (this.state.loading ? "load" : "")
            }
          >
            <span>Condition</span>
          </div>
          <div
            className={
              "condition d-flex flex-row " +
              (this.state.loading ? "invisible" : "")
            }
            style={{ flexGrow: 1 }}
          >
            {this.state.condition.Diagnoses && (
              <ConditionBase
                model="Diagnosis"
                data={this.state.condition.Diagnoses}
              ></ConditionBase>
            )}
            {this.state.condition.Problems && (
              <ConditionBase
                model="Problems"
                data={this.state.condition.Problems}
              ></ConditionBase>
            )}
          </div>
        </React.Fragment>
      )
    );
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  updateData = () => {
    if (this.props.patientId == 0) return;
    this.setState({ loading: true });
    console.log("Loading condition data!");
    fetch(
      configurations.baseURL + "/Condition/Patient/" + this.props.patientId
    ).then(
      res => {
        res.json().then(this.updateState);
      },
      error => {
        console.log("fetch condition failed", error);
        this.updateState({
          Diagnoses: null,
          Problems: null
        });
      }
    );
  };

  updateState(s) {
    console.log("update state condition");
    this.setState({
      condition: s,
      loading: false
    });
  }
}

export default Condition;
