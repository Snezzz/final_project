export const recordsReducer = (store = {}, action) => {
    switch (action.type) {
        case "ADD_RECORDS":
            return action.records;
        default:
            return store;
    }
};
export const recordsType = (store = "active", action) => {
    switch (action.type) {
        case "CHANGE":
            return action.variant;
        default:
            return store;
    }
};
