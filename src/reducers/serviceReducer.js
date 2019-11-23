export const servicesReducer = (state = [{}], action) => {
    switch (action.type) {
        case "LOAD_SERVICES":
            return action.services;

        default:
            return state;
    }
};
export const serviceReducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_SERVICE":
            return action.service;
        default:
            return state;
    }
};
