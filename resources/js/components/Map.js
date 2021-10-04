import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import { fetchTurbineData } from "../api";
// import windTurbine from "../../images/wind_turbine.png";

const Map = ({ setSelectedMarker, setTurbineInfo }) => {
    const [turbineData, setTurbineData] = useState([]);

    // Should this be useEffect()? Just needs done on mount
    useEffect(() => {
        const getTurbineData = async () => {
            const data = await fetchTurbineData();
            setTurbineData(data);
            // setTurbineInfo(data);
            console.log("turbine data", data);
        };
        getTurbineData();
    }, []);

    console.log("api ", process.env.MIX_REACT_APP_GOOGLE_KEY);

    // const onMarkerClick = (marker) => setSelectedMarker(marker);

    if (turbineData.length < 1) return <div>Loading...</div>;

    return (
        <div className="Map">
            <h3>Google map here</h3>;
            <GoogleMapReact
                bootstrapURLKeys={{
                    // remove the key if you want to fork
                    key: process.env.MIX_REACT_APP_GOOGLE_KEY,
                    language: "en",
                    region: "US",
                }}
                defaultCenter={{ lat: 55.682, lng: -4.806 }}
                defaultZoom={16}
                // distanceToMouse={distanceToMouse}
            >
                {turbineData.map((marker) => {
                    return (
                        <Marker
                            key={marker.id}
                            lat={marker.lat}
                            lng={marker.lng}
                            id={marker.id}
                            tooltip={marker.turbineName}
                            // selectedMarker={selectedMarker}
                            setSelectedMarker={setSelectedMarker}
                        />
                        // <img
                        //     className="markerImage"
                        //     key={marker.id}
                        //     src={windTurbine}
                        //     alt="marker"
                        //     width="50"
                        //     height="50"
                        //     onClick={onMarkerClick(marker)}
                        // />
                    );
                })}
            </GoogleMapReact>
        </div>
    );
};

export default Map;
