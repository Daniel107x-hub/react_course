import React from "react";
import Table from "./Table";
import {FaSort, FaSortUp, FaSortDown} from 'react-icons/fa'
import useSort from '../hooks/use-sort';

function SortableTable({data, config,  ...rest}) {
  const [sortOrder, sortBy, setSortColumn, sortedData] = useSort(data, config);
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) return column;
    const icon = sortOrder === null || column.label !== sortBy ? <FaSort/> : sortOrder === 'asc' ? <FaSortUp/> : <FaSortDown/>
    return {
      ...column,
      header: () => (
        <th onClick={() => setSortColumn(column)} className="flex items-center cursor-pointer hover:text-red-600" >
          {icon}{column.label}
        </th>
      ),
    };
  });

  return <div>
    <Table data={sortedData} {...rest} config={updatedConfig} />
  </div>
}

export default SortableTable;
