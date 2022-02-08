import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import Table from "./Table";
import Report from "./Report";
import { fetchTurbineData } from "../api";
import Map from "./Map";

export const SpaContainer = () => {
    const [selectedMarker, setSelectedMarker] = useState();

    const [turbineData, setTurbineData] = useState([]);

    useEffect(() => {
        const getTurbineData = async () => {
            const data = await fetchTurbineData();
            setTurbineData(data);
        };
        getTurbineData();
    }, []);

    // const [reportData, setReportData] = useState([]);
    // const [turbineInfo, setTurbineInfo] = useState();

    // useEffect(() => {
    //     const getReportData = async () => {
    //         const data = await fetchReportData(selectedMarker);
    //         if (selectedMarker > 0) {
    //             setTurbineInfo(data.turbine[0]);
    //             setReportData(data.report);
    //         }
    //     };
    //     getReportData();
    // }, [selectedMarker]);

    return (
        <div className="wrapper">
            <Header />
            <Table
                turbineData={turbineData}
                selectedMarker={selectedMarker}
                setSelectedMarker={setSelectedMarker}
            ></Table>
            <Report
                selectedMarker={selectedMarker}
                // reportData={reportData}
                // turbineInfo={turbineInfo}
            ></Report>
            <Map
                selectedMarker={selectedMarker}
                setSelectedMarker={setSelectedMarker}
                turbineData={turbineData}
            />
        </div>
    );
};
