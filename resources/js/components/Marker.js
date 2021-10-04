import React from "react";
import windTurbine from "../../images/wind_turbine.png";

const Marker = ({ text, tooltip, $hover }) => {
    const handleClick = () => {
        console.log(`You clicked on ${tooltip}`);
    };

    return (
        <div
            className={$hover ? "circle hover" : "circle"}
            onClick={handleClick}
        >
            <img src={windTurbine} alt="Turbine" width="50" height="50" />
            <span className="circleText" title={tooltip}>
                {text}
            </span>
        </div>
    );
};

export default Marker;
