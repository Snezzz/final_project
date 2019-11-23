

export const loadServices = (services) => {
    return {
        type: "LOAD_SERVICES",
        services
    }
};
export const getService = (service) => {
    return {
        type: "GET_SERVICE",
        service
    }
};