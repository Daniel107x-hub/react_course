import React, { useState } from "react";
import Table from "./Table";

function SortableTable(props) {
  const handleSort = (column) => {};
  const { config } = props;
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) return column;
    return {
      ...column,
      header: () => (
        <th className="bg-red-500" onClick={() => handleSort(column)}>
          {column.label} is sortable
        </th>
      ),
    };
  });
  return <Table {...props} config={updatedConfig} />;
}

export default SortableTable;
