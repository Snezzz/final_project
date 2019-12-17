import React, { Component } from "react";
import $ from "jquery";
import "./form.css";

class Form extends Component {
    checkOldPassword = () => {
        const password = $("#personOldPassword").val();
        if (password == this.props.user.password) return true;
        else return false;
    };
    checkNewPassword = () => {
        const newPassword = $("#personNewPassword").val();
        const repeatPassword = $("#personPasswordRepeat").val();
        if (newPassword.length === 0 && repeatPassword.length === 0) {
            alert("Fields have to be filled");
            return false;
        } else if (repeatPassword != newPassword) {
            return false;
        } else return true;
    };
    updatePassword = e => {
        e.preventDefault();
        if (this.checkOldPassword()) {
            if (this.checkNewPassword()) {
                let password = $("#personNewPassword").val();
                if (password.length === 0) {
                    return false;
                }
                $("#personNewPassword").val("");
                $("#personOldPassword").val("");
                $("#personPasswordRepeat").val("");
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
        let name = $("#personName")
            .val()
            .toString()
            .split(" ");
        const email = $("#personEmail").val();
        const first_name = name[0];
        const login = $("#personLogin").val();
        const password = this.props.user.password;
        const phone_number = $("#personNumber").val();
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
