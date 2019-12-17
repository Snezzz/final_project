export const companyReducer = (state = {}, action) => {
    switch (action.type) {
        case "LOAD":
            return action.data;
        default:
            return state;
    }
};

