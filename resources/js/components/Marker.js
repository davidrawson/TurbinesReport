import React from "react";
import windTurbine from "../../images/wind_turbine.png";

const Marker = ({ setSelectedMarker, id, tooltip, $hover }) => {
    // const onMarkerClick = (marker) => setSelectedMarker(marker);

    const handleClick = () => {
        console.log(`You clicked on ${tooltip}`);
        console.log(`id ${id}`);
        setSelectedMarker(id);

        // some kind of toggle for visible for a highlight
        // console.log(`Selected marker  ${selectedMarker}`);
    };

    return (
        <div onClick={handleClick}>
            <img
                className="windTurbine"
                src={windTurbine}
                alt="Turbine"
                width="80"
                height="80"
            />
            <span>{tooltip}</span>
        </div>
    );
};

export default Marker;
