import React, { useState } from "react";
// import { fetchTurbineData, fetchReportData } from "../api";
// import ReactScrollableList from "react-scrollable-list";
import { Wrapper, LoadingView } from "./ReactApp.styles";
// import { containerStyle, center, options } from "./settings";
import Report from "./Report";
import Map from "./Map";

export const ReactApp = () => {
    // const [turbineData, setTurbineData] = useState([]);
    const [turbineInfo, setTurbineInfo] = useState([]);
    const [selectedMarker, setSelectedMarker] = useState();

    // const onTurbineButtonClick = async () => {
    //     const data = await fetchTurbineData();
    //     // setTurbineData(data);
    //     console.log("turbine data", data);
    // };

    // useEffect(() => {
    //     console.log("in useEffect");
    //     const getReportData = async () => {
    //         const data = await fetchReportData(selectedMarker);
    //         setTurbineData(data.report);
    //         setTurbineInfo(data.turbine);
    //         console.log("report data", data.report);
    //     };
    //     getReportData();
    // }, [selectedMarker]);

    // now it's wired up this could be useEffect
    // const onReportButtonClick = async () => {
    //     const data = await fetchReportData(selectedMarker);
    //     setTurbineData(data.report);
    //     setTurbineInfo(data.turbine);
    //     console.log("report data", data.report);
    // };

    // if (!isLoaded) return <div>Map Loading...</div>;

    return (
        <Wrapper>
            <div>
                <Report
                    selectedMarker={selectedMarker}
                    // turbineData={turbineInfo}
                    // turbineInfo={turbineInfo}
                ></Report>
            </div>
            <div>
                <Map
                    // selectedMarker={selectedMarker}
                    setSelectedMarker={setSelectedMarker}
                    // setTurbineInfo={setTurbineInfo}
                />
            </div>
        </Wrapper>
    );
};

// export default ReactApp;
