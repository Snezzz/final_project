import "./form.css";
import React, { Component } from "react";
import $ from "jquery";

class Form extends Component {
    close = () => {
        $(".form")
            .removeClass("form--active")
            .removeClass("form--wrong");
    };
    toggle = e => {
        e.preventDefault();
        $("input").val("");
        this.props.change(!this.props.login);
    };

    login = e => {
        e.preventDefault();
        const login = $("#inputLogin").val();
        const password = $("#inputPassword").val();
        if (login.length !== 0 && password.length !== 0) {
            $("#inputLogin").css("border-color", "");
            $("#inputPassword").css("border-color", "");
            this.props.logIn(login, password);
        } else if (login.length === 0 && password.length === 0) {
            $("#inputLogin").css("border-color", "red");
            $("#inputPassword").css("border-color", "red");
        } else if (password.length === 0) {
            $("#inputLogin").css("border-color", "");
            $("#inputPassword").css("border-color", "red");
        } else {
            $("#inputPassword").css("border-color", "");
            $("#inputLogin").css("border-color", "red");
        }
    };

    addUser = e => {
        e.preventDefault();
        let validation = true;
        $("input").each((i, el) => {
            if ($(el).attr("data-validation") === "false") {
                $(el).css("border-color", "red");
                validation = false;
            }
        });
        if (validation) {
            let name = $("#inputName")
                .val()
                .toString()
                .split(" ");
            // ID  	EMAIL  	FIRST_NAME  	LOGIN  	PASSWORD  	PHONE_NUMBER  	SECOND_NAME  	SUR_NAME
            const email = $("#inputEmail")
                .val();
            const first_name = name[0];
            const login = $("#inputLogin")
                .val();
            const password = $("#inputPassword")
                .val();
            const phone_number = $("#inputNumber")
                .val();
            const second_name = name[1] || "";
            const sur_name = name[2] || "";
            const user = {
                email: email,
                firstName: first_name,
                login: login,
                password: password,
                phoneNumber: phone_number,
                secondName: second_name,
                surName: sur_name
            };
            $("input").val("");
            this.props.addUser(user);
            this.toggle(e);
        } else {
            return false;
        }
    };
    defineValidation = e => {
        let result = true;
        let label = $("label[data-for=" + e.target.id + "]");

        switch (e.target.id) {
            case "inputEmail":
                let email = $("#inputEmail").val();
                if (email.length === 0) {
                    label.text("It has to be determined");
                    label.css("display", "block");
                    result = false;
                } else if (!email.match(/[@]/)) {
                    label.text("It has to contain @");
                    label.css("display", "block");
                    result = false;
                } else if (!email.match(/[.]/)) {
                    label.text("It has to contain .");
                    label.css("display", "block");
                    result = false;
                }
                break;
            case "inputLogin":
                let login = $("#inputLogin").val();
                if (login.length === 0) {
                    label.text("It has to be determined");
                    label.css("visibility", "visible");
                    result = false;
                }
                break;
            case "inputName":
                let name = $("#inputName").val();
                if (name.length === 0) {
                    label.text("It has to be determined");
                    label.css("display", "block");
                    result = false;
                } else if (name.match(/[^A-Za-zА-Яа-я\s]+/)) {
                    label.text("It can be only a letters");
                    label.css("display", "block");
                    result = false;
                }
                break;
            case "inputNumber":
                let phone = $("#inputNumber").val();
                if (phone.match(/[+][^0-9.^0-9]+/)) {
                    label.text("It can be only a number");
                    label.css("display", "block");
                    result = false;
                } else if (phone.length !== 11) {
                    label.text("Number must be 11 characters");
                    label.css("display", "block");
                    result = false;
                }
                break;
            case "inputRepeatPassword":
                let repeat = $("#inputRepeatPassword").val();
                let password = $("#inputPassword").val();
                if (repeat !== password) {
                    label.text("Passwords have to coincide");
                    label.css("display", "block");
                    result = false;
                }
                break;
            default:
        }
        if (result) {
            label.css("display", "");
            $(e.target).attr("data-validation", true);
            $(e.target).css("border-size", "2px");
            $(e.target).css("border-color", "green");
        } else {
            $(e.target).attr("data-validation", false);
            $(e.target).css("border-color", "red");
        }
    };

    render() {
        return this.props.login ? (
            <div className="form">
                <div className="exit">
                    <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={this.close}
                    >
                        X
                    </button>
                </div>
                <form>
                    <div className="form-group row ">
                        <img id="logo" src="/img/4.png" alt=""/>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputLogin" className="col-sm-4 col-form-label">
                            Login
                        </label>
                        <div className="col-sm-8">
                            <input
                                type="email"
                                className="form-control"
                                id="inputLogin"
                                placeholder="Login"
                                defaultValue=""
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                            Password
                        </label>
                        <div className="col-sm-8">
                            <input
                                type="password"
                                className="form-control"
                                id="inputPassword"
                                placeholder="****"
                                defaultValue=""
                            />
                        </div>
                    </div>
                    <div className="actions">
                        <div className="form-group row">
                            <div className="col-sm-12 ">
                                <button className="btn btn-secondary" onClick={this.toggle}>
                                    Registration
                                </button>
                                <button className="btn btn-primary" onClick={this.login}>
                                    Sign in
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        ) : (
            <div className="form">
                <div className="exit">
                    <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={this.close}
                    >
                        X
                    </button>
                </div>
                <form>
                    <div className="form-group row ">
                        <img id="logo" src="/img/4.png" alt=""/>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputEmail" className="col-sm-4 col-form-label">
                            Email
                        </label>
                        <div className="col-sm-8">
                            <input
                                type="email"
                                data-validation="false"
                                className="form-control"
                                id="inputEmail"
                                defaultValue=""
                                placeholder="alex21@gmail.com"
                                onBlur={this.defineValidation}
                            />
                            <label data-for="inputEmail">dd</label>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputLogin" className="col-sm-4 col-form-label">
                            Login
                        </label>
                        <div className="col-sm-8">
                            <input
                                type="text"
                                className="form-control"
                                data-validation="false"
                                id="inputLogin"
                                defaultValue=""
                                placeholder="alex21"
                                onBlur={this.defineValidation}
                            />
                            <label data-for="inputLogin" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputLogin" className="col-sm-4 col-form-label">
                            Name
                        </label>
                        <div className="col-sm-8">
                            <input
                                type="text"
                                className="form-control"
                                data-validation="false"
                                id="inputName"
                                defaultValue=""
                                placeholder="Alex"
                                onBlur={this.defineValidation}
                            />
                            <label data-for="inputName" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputNumber" className="col-sm-4 col-form-label">
                            Phone number
                        </label>
                        <div className="col-sm-8">
                            <input
                                type="text"
                                className="form-control"
                                data-validation="false"
                                defaultValue=""
                                id="inputNumber"
                                placeholder="8**********"
                                onBlur={this.defineValidation}
                            />
                            <label data-for="inputNumber" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                            Password
                        </label>
                        <div className="col-sm-8">
                            <input
                                type="password"
                                className="form-control"
                                defaultValue=""
                                id="inputPassword"
                                placeholder="****"
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label
                            htmlFor="inputRepeatPassword"
                            className="col-sm-4 col-form-label"
                        >
                            Password again
                        </label>
                        <div className="col-sm-8">
                            <input
                                type="password"
                                className="form-control"
                                data-validation="false"
                                defaultValue=""
                                id="inputRepeatPassword"
                                placeholder="****"
                                onBlur={this.defineValidation}
                            />
                            <label data-for="inputRepeatPassword" />
                        </div>
                    </div>
                    <div className="actions">
                        <div className="form-group row">
                            <div className="col-sm-12 ">
                                <button className="btn btn-secondary" onClick={this.toggle}>
                                    Log in
                                </button>
                                <button className="btn btn-primary" onClick={this.addUser}>
                                    Create
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default Form;
