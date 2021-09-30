export const fetchTurbineData = async () => {
    try {
        const data = await (await fetch("/turbineData")).json();

        console.log(data);

        return data;
    } catch (error) {
        throw new Error(error);
    }
};
