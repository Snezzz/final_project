import React, { Component } from "react";
import "./personalcabinet.css";
import { Link } from "react-router-dom";
import $ from "jquery";
import { tab } from "bootstrap/js/src/tab";
import PropTypes from "prop-types";

class PersonalCabinet extends Component {
    render() {
        return Object.keys(this.props.user).length > 0 ? (
            <div className="personal-cabinet">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                        <div className="list-group menu-item">
                            <Link
                                to="/cabinet/edit"
                                className="list-group-item list-group-item-action"
                                onClick={e => {
                                    $(e.target).tab("show");
                                }}
                            >
                                Edit profile
                            </Link>
                            <Link
                                to="/cabinet/records"
                                className="list-group-item list-group-item-action"
                                onClick={e => {
                                    $(e.target).tab("show");
                                }}
                            >
                                My records
                            </Link>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">{this.props.children}</div>
                </div>
            </div>
        ) : (
            <div className="alert">
                <h3>
                    <span className="badge badge-danger">You have to login</span>
                </h3>
            </div>
        );
    }
}
PersonalCabinet.propTypes = {
  children: PropTypes.object,
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
})
};
export default PersonalCabinet;
