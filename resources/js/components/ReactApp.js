import React, { useState } from "react";
import { fetchTurbineData, fetchReportData } from "../api";
// import ReactScrollableList from "react-scrollable-list";
import { Wrapper, LoadingView } from "./ReactApp.styles";
import { containerStyle, center, options } from "./settings";
import Report from "./Report";
import Map from "./Map";

export const ReactApp = () => {
    const [turbineData, setTurbineData] = useState([]);
    const [turbineInfo, setTurbineInfo] = useState([]);
    const [selectedMarker, setSelectedMarker] = useState({ id: 3 });

    const onTurbineButtonClick = async () => {
        const data = await fetchTurbineData();
        // setTurbineData(data);
        console.log("turbine data", data);
    };

    const onReportButtonClick = async () => {
        const data = await fetchReportData(3);
        setTurbineData(data.report);
        setTurbineInfo(data.turbine);
        console.log("report data", data.report);
    };

    // if (!isLoaded) return <div>Map Loading...</div>;

    return (
        <Wrapper>
            <div>
                <Report id={selectedMarker.id}></Report>
            </div>
            <div>
                <Map />
            </div>
        </Wrapper>
    );
};

// export default ReactApp;
