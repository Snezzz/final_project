import React, { Component } from "react";
import "./navigation.css";
import { Link } from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <ul className="nav justify-content-around">
                    <li className="nav-item col-12 col-sm-3 col-md-3 col-xl-3 col-lg-3">
                        <Link to={{ pathname: "/" }} className="nav-link active">
                            <button className="btn btn-link">Home</button>
                        </Link>
                    </li>
                    <li className="nav-item col-12 col-sm-3 col-md-3 col-xl-3 col-lg-3">
                        <Link to={{ pathname: "/services" }} className="nav-link active">
                            <button className="btn btn-link">Services</button>
                        </Link>
                    </li>
                    <li className="nav-item col-12 col-sm-3 col-md-3 col-xl-3 col-lg-3">
                        <Link to={{ pathname: "/discounts" }} className="nav-link active">
                            <button className="btn btn-link">Discounts</button>
                        </Link>
                    </li>
                    <li className="nav-item col-12 col-sm-3 col-md-3 col-xl-3 col-lg-3">
                        <Link to={{ pathname: "/info" }} className="nav-link active">
                            <button className="btn btn-link">About us</button>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}
export default Navigation;
