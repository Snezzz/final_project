export const recordsReducer = (store = {}, action) => {
    switch (action.type) {
        case "ADD_RECORDS":
            return action.records;
        case "REMOVE_RECORD":
            let result = [];
            Object.values(action.records).map(el => {
                if (el.id == action.id) {
                    let index = Object.values(action.records).indexOf(el);
                    let firstPart = Object.values(action.records).slice(0, index);
                    let secondPart = Object.values(action.records).slice(
                        index + 1,
                        Object.values(action.records).length
                    );
                    result = firstPart.concat(secondPart);
                }
            });
            return result;
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
