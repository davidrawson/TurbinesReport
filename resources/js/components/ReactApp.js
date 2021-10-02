import React, { useState } from "react";
import { fetchTurbineData, fetchReportData } from "../api";
import ReactScrollableList from "react-scrollable-list";
import { useQuery } from "react-query";

export const ReactApp = () => {
    const [turbineData, setTurbineData] = useState([]);

    const onTurbineButtonClick = async () => {
        const data = await fetchTurbineData();
        // setTurbineData(data);
        console.log("turbine data", data);
    };

    const onReportButtonClick = async () => {
        const data = await fetchReportData(3);
        setTurbineData(data.report);
        console.log("report data", data.report);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card text-center">
                        <div className="card-header">
                            <h2>React Component in Laravel</h2>
                        </div>
                        <button
                            type="button"
                            className="btn btn-outline-secondary btn-sm"
                            onClick={onTurbineButtonClick}
                        >
                            Fetch turbines
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-secondary btn-sm"
                            onClick={onReportButtonClick}
                        >
                            Fetch a report
                        </button>
                        <div className="card-body">
                            <div>
                                <ReactScrollableList
                                    listItems={turbineData}
                                    heightOfItem={30}
                                    maxItemsToRender={20}
                                    style={{ color: "#333" }}
                                />
                            </div>
                        </div>
                    </div>

                    {turbineData ? turbineData.first : null}
                </div>
            </div>
        </div>
    );
};

// export default ReactApp;
