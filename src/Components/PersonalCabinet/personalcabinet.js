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
                    <div className="col-sm-3">
                        <div className="list-group">
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
                    <div className="col-sm-9">{this.props.children}</div>
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
  user: PropTypes.object
};
export default PersonalCabinet;
