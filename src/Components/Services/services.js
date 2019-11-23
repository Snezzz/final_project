import React, { Component } from "react";
import "./services.css";
import { Link } from "react-router-dom";
import hash from "js-hash-code";
class Services extends Component {
    render() {
        return (
            <div className="services">
                <div className="container-fluid">
                    <div className="row">
                        {Object.values(this.props.services).map(item => (
                            <div className="col-sm-4" key={hash(item)}>
                                <div className="card">
                                    <div>{item.name}</div>
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
export default Services;
