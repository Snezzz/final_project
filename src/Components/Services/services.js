import React, { Component } from "react";
import "./services.css";
import { Link } from "react-router-dom";
import hash from "js-hash-code";
import PropTypes from "prop-types";


class Services extends Component {
    render() {
        return (
            <div className="services">
                <div className="container-fluid">
                    <div className="row">
                        {Object.values(this.props.services).map(item => (
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4" key={hash(item)}>
                                <div className="card">
                                    <div className="card-name">{item.name}</div>
                                    <Link to={"/service/" + item.id}>
                                        <img
                                            src={"/img/" + item.logo + ".jpg"}
                                            className="card-img-top"
                                            alt="..."
                                        />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
Services.propTypes = {
  services: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};
export default Services;
