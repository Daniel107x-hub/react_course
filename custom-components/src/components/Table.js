import React, { useState } from "react";
import Button from "./Button";
import { Fragment } from "react";

function Table({ data, config, keyFnc }) {
  // We use a nested map to iterate each config for each item in the table
  const renderedRows = data.map((rowData) => {
    const renderedCols = config.map((config) => (
      <td className="p-3" key={config.label}>
        {config.render(rowData)}
      </td> // Will render each column based on the render function
    ));
    return (
      <tr className="border-b" key={keyFnc(rowData)}>
        {renderedCols}
      </tr>
    );
  });

  const renderedHeaders = config.map((column) => {
    if (column.header)
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    return <th key={column.label}>{column.label}</th>;
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
