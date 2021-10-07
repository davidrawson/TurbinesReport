import React, { useState } from "react";
import { Wrapper } from "./ReactApp.styles";
import { Header } from "./Header";
import Report from "./Report";
import Map from "./Map";

export const ReactApp = () => {
    const [selectedMarker, setSelectedMarker] = useState();

    return (
        <Wrapper>
            <div className="wrapper">
                <Header />
                <Report selectedMarker={selectedMarker}></Report>
                <Map setSelectedMarker={setSelectedMarker} />
            </div>
        </Wrapper>
    );
};
