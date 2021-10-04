import { useState, useEffect } from "react";
import ReactScrollableList from "react-scrollable-list";
import { fetchReportData } from "../api";

const Report = ({ selectedMarker }) => {
    const [turbineData, setTurbineData] = useState([]);
    const [turbineInfo, setTurbineInfo] = useState([]);

    // const onReportButtonClick = async () => {
    //     const data = await fetchReportData(selectedMarker.id);
    //     setTurbineData(data.report);
    //     setTurbineInfo(data.turbine);
    //     console.log("report data", data.report);
    //     console.log("turbine data", data.turbine);
    // };

    useEffect(() => {
        const getReportData = async () => {
            const data = await fetchReportData(selectedMarker);
            if (selectedMarker > 0) {
                setTurbineData(data.report);
                setTurbineInfo(data.turbine);
            }
            console.log("report data", data.report);
            console.log("turbine data", data.turbine);
        };
        getReportData();
    }, [selectedMarker]);

    // const { data: reportData } = useQuery(
    //     [selectedMarker],
    //     () => fetchReportData(selectedMarker),
    //     {
    //         enabled: !!selectedMarker,
    //         refetchOnWindowFocus: false,
    //         staleTime: 60 * 1000 * 5, // 5 minutes
    //     }
    // );

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card text-center">
                        <div className="card-header">
                            <h2>React Component in Laravel</h2>

                            {turbineInfo ? turbineInfo.first : null}
                        </div>
                        <button
                            type="button"
                            className="btn btn-outline-secondary btn-sm"
                            // onClick={onTurbineButtonClick}
                        >
                            Fetch turbines
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-secondary btn-sm"
                            // onClick={onReportButtonClick}
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

export default Report;
