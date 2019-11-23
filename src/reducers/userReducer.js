const user = {};

export const userReducer = (store = user, action) => {
    switch (action.type) {
        case "ADD_USER":
            return action.user;
        case "REMOVE_USER":
            return {};
        default:
            return store;
    }
};

export const loginReducer = (store = true, action) => {
    switch (action.type) {
        case "LOGIN":
            return action.status;
        default:
            return store;
    }
};