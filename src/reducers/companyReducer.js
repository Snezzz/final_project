export const companyReducer = (state = {}, action) => {
    switch (action.type) {
        case "LOAD":
            return action.data;
        default:
            return state;
    }
};
export const discountsReducer = (state = {}, action) => {
    switch (action.type) {
        case "LOAD_DISCOUNTS":
            return action.data;
        default:
            return state;
    }
};
