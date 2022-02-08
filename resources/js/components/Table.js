import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const Table = ({ turbineData, selectedMarker, setSelectedMarker }) => {
    const [columnDefs] = useState([
        { field: "id" },
        { field: "turbineName" },
        { field: "address" },
        { field: "siteId" },
        { field: "lat" },
        { field: "lng" },
    ]);

    //   const [rowData] = useState([
    //     {make: "Toyota", model: "Celica", price: 35000},
    //     {make: "Ford", model: "Mondeo", price: 32000},
    //     {make: "Porsche", model: "Boxter", price: 72000}
    // ]);
    console.log(turbineData);

    // if (turbineData.length < 1) return <div>Loading...</div>;

    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
            <AgGridReact
                rowData={turbineData}
                columnDefs={columnDefs}
            ></AgGridReact>
        </div>
    );
};

export default Table;
