import React from "react";
import "./common.css";

class ConditionBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      loading: true
    };
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        {this.props.data &&
          Array.isArray(this.props.data) &&
          this.props.data.length > 0 &&
          this.renderTable()}
      </React.Fragment>
    );
  }

  toggleCollapse() {
    this.setState({ collapsed: !this.state.collapsed });
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  renderTable() {
    return (
      <div
        className="table-responsive border-right col p-0 "
        style={{ fontSize: 14, maxHeight: "45vh" }}
      >
        {this.props.data && (
          <div className="col-lg-12 p-1 bg-secondary text-light d-flex justify-content-between sticky-top">
            <span>{this.props.model}</span>
            <button
              className="btn btn-sm btn-dark"
              onClick={this.toggleCollapse}
            >
              {this.state.collapsed ? "expand" : "collapse"}
            </button>
          </div>
        )}
        <table
          className={
            "table table-striped table-sm table-hover m-0 " +
            (this.state.collapsed ? "d-none" : "")
          }
        >
          <thead>
            <tr className="row m-0 sticky-top bg-light" style={{ top: 39 }}>
              <th className="col">Text</th>
              <th className="col">Onset</th>
              <th className="col">Abatement Date</th>
              <th className="col">Severity</th>
              <th className="col">Coding</th>
            </tr>
          </thead>
          <tbody>
            {[].concat(this.props.data).map(v => (
              <tr className="row m-0">
                <td className="col">{v.Text}</td>
                <td className="col">{v.Onset}</td>
                <td className="col">{v.AbatementDate}</td>
                <td className="col">{v.Severity}</td>
                <td className="col">
                  {(({ Code, Text }) =>
                    `${Text ? Text : "N/A"} [${Code ? Code : "N/A"}]`)(
                    v.Coding ? v.Coding : {}
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ConditionBase;
