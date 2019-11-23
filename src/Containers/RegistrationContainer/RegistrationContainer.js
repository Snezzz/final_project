import React, { Component } from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import $ from "jquery";
import { addNewUser } from "../../actions/userActions";
import { addRecords } from "../../actions/recordsActions";
import { changeStatus } from "../../actions/userActions";
import { connect } from "react-redux";
import Form from "../../Components/Form/form";

class RegistrationContainer extends Component {
    addUser = user => {
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

    logIn = (login, password) => {
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
                    this.props.addNewUser(response);
                    $("#inputLogin").val("");
                    $("#inputPassword").val("");
                    $(".form")
                        .removeClass("form--active")
                        .removeClass("form--wrong");
                    $.cookie("User", JSON.stringify(this.props.user));
                }
            });
    };

    render() {
        let className;
        if (!this.props.login) className = "form--wrong";
        else className = "form form--active";

        return (
            <Form
                addUser={this.addUser}
                logIn={this.logIn}
                class={className}
                change={this.props.changeStatus}
                login={this.props.login}
            />
        );
    }
}

const mapStateToProps = state => ({
    user: state.userReducer,
    records: state.recordsReducer,
    login: state.loginReducer
});

const mapDispatchToProps = {
    addNewUser,
    addRecords,
    changeStatus
};

//обновление состояния связывается с корневым редьюсером
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegistrationContainer);
