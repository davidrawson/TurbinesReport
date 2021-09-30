import React, { useState } from "react";
import { fetchTurbineData } from "../api";
import ReactScrollableList from "react-scrollable-list";
import { useQuery } from "react-query";

export const ReactApp = () => {
    const [turbineData, setTurbineData] = useState([]);

    const onButtonClick = async () => {
        const data = await fetchTurbineData();
        setTurbineData(data);
        console.log("data", data);
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
                            onClick={onButtonClick}
                        >
                            Secondary
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
