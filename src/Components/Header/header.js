import React, { Component } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import $ from "jquery";
import { connect } from "react-redux";
import { removeUser } from "../../actions/userActions";
import PropTypes from "prop-types";

class Header extends Component {

    login = e => {
        e.preventDefault();
        document.getElementsByClassName("form")[0].className+=" form--active";
    };

    render() {
        return (
            <div className="header">
                <img className="logo" src="/img/4.png" alt="" />

                {Object.keys(this.props.user).length === 0 ? (
                    <div className="header-button">
                        <button
                            className="cabinet-button cabinet--unregistered btn  btn-dark"
                            onClick={this.login}
                        >
                            LogIn
                        </button>
                    </div>
                ) : (
                    <div className="header-button">
                        <Link to="/cabinet/edit">
                            <button className="cabinet-button cabinet--registered btn  btn-dark">
                                My cabinet
                            </button>
                        </Link>
                        <Link to="/">
                            <button
                                className="cabinet-button  btn  btn-dark"
                                onClick={() => {
                                    this.props.removeUser();
                                    $.removeCookie("User");
                                }}
                            >
                                Logout
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.userReducer
});

const mapDispatchToProps = {
    removeUser
};

Header.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    firstName:PropTypes.string,
    secondName:PropTypes.string,
    surName:PropTypes.string,
    login: PropTypes.string,
    phoneNumber:PropTypes.string,
    email: PropTypes.string,
    password:PropTypes.string
}),
    removeUser: PropTypes.func
};
//обновление состояния связывается с корневым редьюсером
export default connect(mapStateToProps, mapDispatchToProps)(Header);
