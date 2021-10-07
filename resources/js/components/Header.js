import windTurbine from "../../images/wind_turbine.png";

export const Header = () => {
    return (
        <div className="header">
            <img className="windTurbine" src={windTurbine} alt="Turbine" />
            <h1 className="header-text">Asset Inspectors Ltd.</h1>
            <a
                className="contact-link"
                href="http://www.assetinspectors.com/contactus"
            >
                <h3 className="header-text" title="Not yet implemented">
                    Contact Us
                </h3>
            </a>
        </div>
    );
};
