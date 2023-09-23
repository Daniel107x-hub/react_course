import React, { useState } from "react";
import Table from "./Table";
import {FaSort, FaSortUp, FaSortDown} from 'react-icons/fa'

function SortableTable({data, config,  ...rest}) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const handleSort = (column) => {
    if(sortOrder === null || sortBy !== column.label) {
      setSortOrder('asc')
      setSortBy(column.label)
    }else if(sortOrder === 'asc'){
      setSortOrder('desc');
      setSortBy(column.label);
    }else{
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) return column;
    const icon = sortOrder === null || column.label !== sortBy ? <FaSort/> : sortOrder === 'asc' ? <FaSortUp/> : <FaSortDown/>
    return {
      ...column,
      header: () => (
        <th onClick={() => handleSort(column)} className="flex items-center cursor-pointer hover:text-red-600" >
          {icon}{column.label}
        </th>
      ),
    };
  });

  // Only sort data if soprt order and sort by are not null
  // Make a copy of data prop
  // Bind correct sortValue function and use it for sorting

  let sortedData = data;
  if(sortOrder && sortBy){
    const {sortValue} = config.find(col => col.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);
      const reversedOrder = sortOrder === 'asc' ? 1 : -1;
      if(typeof valueA === 'string'){
        return valueA.localeCompare(valueB) * reversedOrder;
      }else{
        return (valueA - valueB) * reversedOrder;
      }
    })
  }

  return <div>
    <Table data={sortedData} {...rest} config={updatedConfig} />
  </div>
}

export default SortableTable;
