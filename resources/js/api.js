export const fetchTurbineData = async () => {
    try {
        const data = await (await fetch("/turbineData")).json();

        return data;
    } catch (error) {
        throw new Error(error);
    }
};

export const fetchReportData = async ($id) => {
    try {
        const data = await (await fetch(`/turbineData/${$id}`)).json();

        return data;
    } catch (error) {
        throw new Error(error);
    }
};
