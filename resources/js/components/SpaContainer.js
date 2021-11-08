import React, { useState } from "react";
import { Header } from "./Header";
import Report from "./Report";
import Map from "./Map";

export const SpaContainer = () => {
    const [selectedMarker, setSelectedMarker] = useState(1);

    return (
        <div className="wrapper">
            <Header />
            <Report selectedMarker={selectedMarker}></Report>
            <Map setSelectedMarker={setSelectedMarker} />
        </div>
    );
};
