export const addNewUser = (user) => {
    return {
        type: "ADD_USER",
        user
    }
};
export const changeStatus = (status)=>{
    return {
        type: "LOGIN",
        status
    }
};
export const removeUser = (user) => {
    return {
        type: "REMOVE_USER",
        user
    }
};
