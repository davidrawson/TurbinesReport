import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import { fetchTurbineData } from "../api";

const Map = ({ setSelectedMarker }) => {
    const [turbineData, setTurbineData] = useState([]);

    useEffect(() => {
        const getTurbineData = async () => {
            const data = await fetchTurbineData();
            setTurbineData(data);
        };
        getTurbineData();
    }, []);

    if (turbineData.length < 1) return <div>Loading...</div>;

    return (
        <div className="map-container">
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: process.env.MIX_REACT_APP_GOOGLE_KEY,
                    language: "en",
                    region: "US",
                }}
                defaultCenter={{ lat: 55.682, lng: -4.806 }}
                defaultZoom={16}
                mapType={"Satellite"}
            >
                {turbineData.map((marker) => {
                    return (
                        <Marker
                            key={marker.id}
                            lat={marker.lat}
                            lng={marker.lng}
                            id={marker.id}
                            tooltip={marker.turbineName}
                            setSelectedMarker={setSelectedMarker}
                        />
                    );
                })}
            </GoogleMapReact>
        </div>
    );
};

export default Map;
