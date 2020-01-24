import "./form.css";
import React, { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {
    form = (form)=>{this._form = form};
    userLogin = (login)=>{this._login = login};
    password = (password)=>{this._password = password};
    email = (email) => {this._email = email};
    name = (name) => {this._name = name};
    number = (number) => {this._number = number};
    passwordRepeat = (password)=> { this._passwordRepeat = password};

    close = () => {
            this._form.className="form";
    };
    toggle = e => {
        e.preventDefault();
        this.myFormRef.reset();
        this.props.change(!this.props.login);
    };

    login = e => {
        e.preventDefault();
        const login = this._login.value;
        const password = this._password.value;
        if (login.length !== 0 && password.length !== 0) {
            this._login.style.borderColor = "";
            this._password.style.borderColor = "";
            this.props.logIn(login, password);
        } else if (login.length === 0 && password.length === 0) {
            this._login.style.borderColor = "red";
            this._password.style.borderColor ="red";
        } else if (password.length === 0) {
            this._login.style.borderColor = "";
            this._password.style.borderColor = "red";
        } else {
            this._password.style.borderColor = "";
            this._login.style.borderColor = "red";
        }
    };

    addUser = e => {
        e.preventDefault();
        let validation = true;
        this.myFormRef.input.forEach((i, el) => {
            if (el.getAttribute("data-validation") === "false") {
                el.style.borderColor =  "red";
                validation = false;
            }
        });
        if (validation) {
            let name = this._name.value.toString().split(" ");
            // ID  	EMAIL  	FIRST_NAME  	LOGIN  	PASSWORD  	PHONE_NUMBER  	SECOND_NAME  	SUR_NAME
            const email = this._email.value;
            const first_name = name[0];
            const login = this._login.value;
            const password = this._password.value;
            const phone_number = this._number.value;
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
            this._name.value = this._email.value = this._login.value = this._password.value = "";
            this.props.addUser(user);
            this.toggle(e);
        } else {
            return false;
        }
    };
    defineValidation = e => {
        let result = true;
        let label = e.target.parentElement.children[1];

        switch (e.target.id) {
            case "inputEmail":
                let email = this._email.value;
                if (email.length === 0) {
                    label.textContent="It has to be determined";
                    label.style.display =  "block";
                    result = false;
                } else if (!email.match(/[@]/)) {
                    label.textContent= "It has to contain @";
                    label.style.display = "block";
                    result = false;
                } else if (!email.match(/[.]/)) {
                    label.textContent = "It has to contain .";
                    label.style.display = "block";
                    result = false;
                }
                break;
            case "inputLogin":
                let login = this._login.value;
                if (login.length === 0) {
                    label.textContent = "It has to be determined";
                    label.style.visibility =  "visible";
                    result = false;
                }
                break;
            case "inputName":
                let name = this._name.value;
                if (name.length === 0) {
                    label.textContent= "It has to be determined";
                    label.style.display =  "block";
                    result = false;
                } else if (name.match(/[^A-Za-zА-Яа-я\s]+/)) {
                    label.textContent="It can be only a letters";
                    label.style.display = "block";
                    result = false;
                }
                break;
            case "inputNumber":
                let phone = this._number.value;
                if (phone.match(/[+][^0-9.^0-9]+/)) {
                    label.textContent="It can be only a number";
                    label.style.display =  "block";
                    result = false;
                } else if (phone.length !== 11) {
                    label.textContent="Number must be 11 characters";
                    label.style.display =  "block";
                    result = false;
                }
                break;
            case "inputRepeatPassword":
                let repeat = this._passwordRepeat.value;
                let password = this._password.value;
                if (repeat !== password) {
                    label.textContent="Passwords have to coincide";
                    label.style.display =  "block";
                    result = false;
                }
                break;
            default:
        }
        if (result) {
            label.style.display =  "";
            e.target.setAttribute("data-validation", true);
            e.target.style.borderSize =  "2px";
            e.target.style.borderColor =  "green";
        } else {
            e.target.setAttribute("data-validation", false);
            e.target.style.borderColor =  "red";
        }
    };

    render() {
        return this.props.login ? (
            <div className="form" ref={this.form}>
                <div className="exit">
                    <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={this.close}
                    >
                        X
                    </button>
                </div>
                <form ref={(el) => this.myFormRef = el}>
                    <div className="form-group row ">
                        <img id="logo" src="/img/4.png" alt=""/>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputLogin" className="col-sm-4 col-form-label">
                            Login
                        </label>
                        <div className="col-sm-8">
                            <input
                                type="text"
                                className="form-control"
                                id="inputLogin"
                                placeholder="Login"
                                defaultValue=""
                                ref={this.userLogin}
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
                                ref={this.password}
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
            <div className="form" ref={this.form}>
                <div className="exit">
                    <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={this.close}
                    >
                        X
                    </button>
                </div>
                <form ref={(el) => this.myFormRef = el}>
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
                                ref={this.email}
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
                                ref={this.userLogin}
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
                                ref={this.name}
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
                                ref={this.number}
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
                                ref={this.password}
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
                                ref={this.passwordRepeat}
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

Form.propTypes = {
    login: PropTypes.bool,
    change: PropTypes.func,
    logIn: PropTypes.func,
    addUser: PropTypes.func
};
export default Form;
