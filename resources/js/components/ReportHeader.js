export const ReportHeader = ({ turbineInfo }) => {
    return (
        <div className="report-header">
            <h1>Turbine Damage Report</h1>
            <br></br>
            <p>Turbine Name: {turbineInfo ? turbineInfo.turbineName : null}</p>
            <p>Site / Farm ID: {turbineInfo ? turbineInfo.siteId : null}</p>
            <p>
                Location: {turbineInfo ? turbineInfo.lat : null}
                {turbineInfo ? ", " : null}
                {turbineInfo ? turbineInfo.lng : null}
            </p>
        </div>
    );
};
