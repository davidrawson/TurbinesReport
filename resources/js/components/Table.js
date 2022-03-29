import React, { useState, useCallback, useRef, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
// import { useEffect } from "react/cjs/react.production.min";

const Table = ({ turbineData, selectedMarker, setSelectedMarker }) => {
    const gridRef = useRef();
    const [columnDefs] = useState([
        { field: "id", sortable: true },
        { field: "turbineName", sortable: true },
        { field: "siteId", sortable: true },
        { field: "lat" },
        { field: "lng" },
    ]);

    // useEffect(
    //     (selectedMarker) => {
    //         node.setSelected(

    //         );
    //     },
    //     [selectedMarker]
    // );
    //   const [rowData] = useState([
    //     {make: "Toyota", model: "Celica", price: 35000},
    //     {make: "Ford", model: "Mondeo", price: 32000},
    //     {make: "Porsche", model: "Boxter", price: 72000}
    // ]);
    console.log(turbineData);

    const onSelectionChanged = useCallback(() => {
        const selectedRows = gridRef.current.api.getSelectedRows();
        document.querySelector("#selectedRows").innerHTML =
            selectedRows.length === 1 ? selectedRows[0].id : "";
    }, []);

    // if (turbineData.length < 1) return <div>Loading...</div>;

    return (
        <div className="ag-theme-alpine" style={{ height: 350, width: 1100 }}>
            <span id="selectedRows"></span>
            <AgGridReact
                rowData={turbineData}
                columnDefs={columnDefs}
                rowSelection={"single"}
                onSelectionChanged={onSelectionChanged}
                ref={gridRef}
            ></AgGridReact>
        </div>
    );
};

export default Table;
