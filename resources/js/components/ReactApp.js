import React, { useState } from "react";
import { Wrapper } from "./ReactApp.styles";
import Report from "./Report";
import Map from "./Map";

export const ReactApp = () => {
    const [selectedMarker, setSelectedMarker] = useState();

    return (
        <Wrapper>
            <div className="main-container">
                <div>
                    <Report selectedMarker={selectedMarker}></Report>
                </div>
                <div>
                    <Map setSelectedMarker={setSelectedMarker} />
                </div>
            </div>
        </Wrapper>
    );
};
