import React, { Component } from "react";
import $ from "jquery";
import "./form.css";

class Form extends Component {

    newPassword = (password) => {this._np = password};
    oldPassword = (password) => {this._op = password};
    passwordRepeat = (passwordRepeat)=>{this._pr = passwordRepeat};
    name = (name) => {this._name = name};
    email = (email) => {this._email = email};
    login = (login) => {this._login = login};
    number = (number) => {this._number = number};


    checkOldPassword = () => {
        const password = this._op.value;
        return password === this.props.user.password;
    };
    checkNewPassword = () => {
        const newPassword = this._np.value;
        const repeatPassword = this._pr.value;
        if (newPassword.length === 0 && repeatPassword.length === 0) {
            alert("Fields have to be filled");
            return false;
        }
        return repeatPassword === newPassword;
    };
    updatePassword = e => {
        e.preventDefault();
        if (this.checkOldPassword()) {
            if (this.checkNewPassword()) {
                let password = this._np.value;
                if (password.length === 0) {
                    return false;
                }
                this._np.value = "";
                this._op.value = "";
                this._pr.value = "";
                let user = this.props.user;
                user.password = password;
                this.props.update(user);
            } else alert("Your password repeat has to coincide with new password!");
        } else {
            alert("Your old password is wrong");
        }
    };

    update = e => {
        e.preventDefault();
        const id = this.props.user.clientId;
        let name = this._name.value.toString().split(" ");
        const email = this._email.value;
        const first_name = name[0];
        const login = this._login.value;
        const password = this.props.user.password;
        const phone_number = this._number.value;
        const second_name = name[1] || "";
        const sur_name = name[2] || "";
        const img = this.props.user.img;

        const user = {
            clientId: id,
            email: email,
            firstName: first_name,
            img: img,
            login: login,
            password: password,
            phoneNumber: phone_number,
            secondName: second_name,
            surName: sur_name
        };
        $.removeCookie("User");
        $.cookie("User", JSON.stringify(user));
        this.props.update(user);
    };
    render() {
        let user = this.props.user;
        return this.props.user ? (
            <div className="profile-form">
                <div className="row">
                    <div className="col-sm-4 profile-img">
                        {this.props.user.img ? (
                            <img src={"/img/" + this.props.user.img} alt="logotype" />
                        ) : (
                            <img src="/img/logo.png" alt="logotype" />
                        )}
                    </div>
                    <div className="col-sm-8">
                        <form>
                            <div className="form-group row">
                                <label htmlFor="inputName" className="col-sm-4 col-form-label">
                                    Name
                                </label>
                                <div className="col-sm-8">
                                    <input
                                        className="form-control"
                                        id="personName"
                                        defaultValue={
                                            user.firstName +
                                            " " +
                                            user.secondName +
                                            " " +
                                            user.surName
                                        }
                                        ref={this.name}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputLogin" className="col-sm-4 col-form-label">
                                    Login
                                </label>
                                <div className="col-sm-8">
                                    <input
                                        className="form-control"
                                        id="personLogin"
                                        defaultValue={user.login}
                                        ref={this.login}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label
                                    htmlFor="inputNumber"
                                    className="col-sm-4 col-form-label"
                                >
                                    Phone number
                                </label>
                                <div className="col-sm-8">
                                    <input
                                        className="form-control"
                                        id="personNumber"
                                        defaultValue={user.phoneNumber}
                                        ref={this.number}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputEmail" className="col-sm-4 col-form-label">
                                    Email
                                </label>
                                <div className="col-sm-8">
                                    <input
                                        className="form-control"
                                        id="personEmail"
                                        defaultValue={user.email}
                                        ref={this.email}
                                    />
                                </div>
                            </div>
                            <div className="actions">
                                <div className="form-group row">
                                    <div className="col-sm-12 ">
                                        <button className="btn btn-secondary" onClick={this.update}>
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <form>
                            <div className="form-group row">
                                <label
                                    htmlFor="personOldPassword"
                                    className="col-sm-4 col-form-label"
                                >
                                    Old password
                                </label>
                                <div className="col-sm-8">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="personOldPassword"
                                        ref={this.oldPassword}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label
                                    htmlFor="personNewPassword"
                                    className="col-sm-4 col-form-label"
                                >
                                    New password
                                </label>
                                <div className="col-sm-8">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="personNewPassword"
                                        ref={this.newPassword}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label
                                    htmlFor="personPasswordRepeat"
                                    className="col-sm-4 col-form-label"
                                >
                                    Password again
                                </label>
                                <div className="col-sm-8">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="personPasswordRepeat"
                                        ref={this.passwordRepeat}
                                    />
                                </div>
                            </div>

                            <div className="actions">
                                <div className="form-group row">
                                    <div className="col-sm-12 ">
                                        <button
                                            className="btn btn-secondary"
                                            onClick={this.updatePassword}
                                        >
                                            Change password
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        ) : (
            <div>waiting data...</div>
        );
    }
}
export default Form;
