import React from "react";
import windTurbine from "../../images/wind_turbine.png";

const Marker = ({ setSelectedMarker, id, tooltip }) => {
    const handleClick = () => {
        setSelectedMarker(id);
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
