import { useState, useEffect } from "react";
import ReactScrollableList from "react-scrollable-list";
import { fetchReportData } from "../api";
import { ReportHeader } from "./ReportHeader";

const Report = ({ selectedMarker }) => {
    const [reportData, setReportData] = useState([]);
    const [turbineInfo, setTurbineInfo] = useState();

    useEffect(() => {
        const getReportData = async () => {
            const data = await fetchReportData(selectedMarker);
            if (selectedMarker > 0) {
                setTurbineInfo(data.turbine[0]);
                setReportData(data.report);
            }
        };
        getReportData();
    }, [selectedMarker]);

    return (
        <div className="report-container">
            <div>
                <ReportHeader turbineInfo={turbineInfo} />
            </div>
            <div>
                <ReactScrollableList
                    listItems={reportData}
                    heightOfItem={30}
                    maxItemsToRender={20}
                    style={{ color: "#333" }}
                />
            </div>
        </div>
    );
};

export default Report;
