import React, { Component } from "react";
import "./navigation.css";
import { Link } from "react-router-dom";
import $ from "jquery";
import { tab } from "bootstrap/js/src/tab";
import hash from 'js-hash-code';
import PropTypes from 'prop-types';

class Navigation extends Component {
    render() {
        return (
            <div className="services-navigation">
                <h4>
                    <span className="badge badge-pill badge-dark">Services</span>
                </h4>
                <div className="list-group">
                    {this.props.data.map(service => (
                        <Link
                            to={"/service/" + service.id}
                            onClick={e => {
                                $(e.target).tab("show");
                                this.props.loadData(service.id);
                            }}
                            className="list-group-item list-group-item-action"
                            key={hash(service.id)}
                        >
                            {service.name}
                        </Link>
                    ))}
                </div>
            </div>
        );
    }
}
Navigation.propTypes = {
    loadData: PropTypes.func,
    data: PropTypes.array
};
export default Navigation;
