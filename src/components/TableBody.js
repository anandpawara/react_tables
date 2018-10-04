import React from "react";
import "./TableBody.css";
const TableBody = props => {
  //   console.log(props.data);
  var tableBody = props.data.rows.map(row => (
    <tr>
      {props.data.columns.map(column => (
        <td className="bodyData">{row[column]}</td>
      ))}
    </tr>
  ));
  return <tbody>{tableBody}</tbody>;
};

export default TableBody;
