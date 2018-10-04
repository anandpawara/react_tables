import React, { Component } from "react";
import "./App.css";
import Table from "./components/table";
class App extends Component {
  constructor() {
    super();
    this.state = {
      tableData: {
        columns: ["Service", "Cost/Unit", "Unit", "Units Requested"],
        rows: [
          {
            Service: "Veterinary Assitance",
            "Cost/Unit": 50,
            Unit: "1 Hour",
            "Units Requested": 12
          },
          {
            Service: "Veterinary Assitance",
            "Cost/Unit": 50,
            Unit: "1 Hour",
            "Units Requested": 12
          },
          {
            Service: "Veterinary Assitance",
            "Cost/Unit": 50,
            Unit: "1 Hour",
            "Units Requested": 12
          },
          {
            Service: "Veterinary Assitance",
            "Cost/Unit": 50,
            Unit: "1 Hour",
            "Units Requested": 12
          },
          {
            Service: "Veterinary Assitance",
            "Cost/Unit": 50,
            Unit: "1 Hour",
            "Units Requested": 12
          },
          {
            Service: "Veterinary Assitance",
            "Cost/Unit": 50,
            Unit: "1 Hour",
            "Units Requested": 12
          },
          {
            Service: "Veterinary Assitance",
            "Cost/Unit": 50,
            Unit: "1 Hour",
            "Units Requested": 12
          },
          {
            Service: "Veterinary Assitance",
            "Cost/Unit": 50,
            Unit: "1 Hour",
            "Units Requested": 12
          },
          {
            Service: "Veterinary Assitance",
            "Cost/Unit": 50,
            Unit: "1 Hour",
            "Units Requested": 12
          },
          {
            Service: "foo",
            Unit: null,
            "Cost/Unit": undefined,
            "Units Requested": 42
          }
        ]
      }
    };
  }

  render() {
    // console.log(this.state.tableData.rows);
    return (
      <div className="App">
        <Table data={this.state.tableData} />
      </div>
    );
  }
}

export default App;
