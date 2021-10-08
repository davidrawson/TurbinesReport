import React, { useState } from "react";
import { Header } from "./Header";
import Report from "./Report";
import Map from "./Map";

export const ReactApp = () => {
    const [selectedMarker, setSelectedMarker] = useState();

    return (
        <div className="wrapper">
            <Header />
            <Report selectedMarker={selectedMarker}></Report>
            <Map setSelectedMarker={setSelectedMarker} />
        </div>
    );
};
