import React from "react";
import "./TableHeader.css";
const TableHeaders = props => {
  const headerItems = props.columns.map(column => (
    <th className="headerData">{column}</th>
  ));
  return (
    <thead id="costHead">
      <tr>{headerItems}</tr>
    </thead>
  );
};

export default TableHeaders;
