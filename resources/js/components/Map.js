import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import { fetchTurbineData } from "../api";

const Map = () => {
    const [turbineData, setTurbineData] = useState([]);

    // Should this be useEffect()? Just needs done on mount
    useEffect(() => {
        const getTurbineData = async () => {
            const data = await fetchTurbineData();
            setTurbineData(data);
            console.log("turbine data", data);
        };
        getTurbineData();
    }, []);

    console.log("api ", process.env.MIX_REACT_APP_GOOGLE_KEY);

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
                {turbineData.map(({ lat, lng, id, turbineName }) => {
                    return (
                        <Marker
                            key={id}
                            lat={lat}
                            lng={lng}
                            text={id}
                            tooltip={turbineName}
                        />
                    );
                })}
            </GoogleMapReact>
        </div>
    );
};

export default Map;
