import $ from "jquery";

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
export const updateUser = (user) => dispatch =>{
    fetch("http://localhost:8080/user", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    })
        .then(() => {
            alert("Successful update!");

        })
        .catch(error => {
            console.log(error);
        });
};
export const addUser = (user) => dispatch =>{
    fetch("http://localhost:8080/user", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    })
        .then(() => {
            alert("Success registration!");
        })
        .catch(error => {
            console.log(error);
        });
};
export const login = (login, password) => dispatch =>{
    fetch(`http://localhost:8080/user?l=${login}&p=${password}`, {
        method: "get",
        headers: { "Content-Type": "application/json" }
    })
        .then(response =>
            response.json().catch(e => {
                $(".form").addClass("form--wrong");
            })
        )
        .then(response => {
            if (response) {
                dispatch(addNewUser(response));
                $("#inputLogin").val("");
                $("#inputPassword").val("");
                $(".form")
                    .removeClass("form--active")
                    .removeClass("form--wrong");
                $.cookie("User", JSON.stringify(response));
            }
        });
};