import { useState } from "react";

const useSort = (data, config) => {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const setSortColumn = (column) => {
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


    return [sortOrder, sortBy, setSortColumn, sortedData];
}

export default useSort;