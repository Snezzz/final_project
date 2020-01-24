import React, { Component } from "react";
import "./discounts.css";
import hash from "js-hash-code";
import "./discounts.css"
import PropTypes from "prop-types";

class Discounts extends Component {
    render() {
        return (
            <div className="default">
                <div className="container-fluid">
                    <div className="row">
                        {this.props.discounts.map(data => (
                            <div
                                className="card col-12 col-sm-4 col-md-4 col-xl-4 col-lg-4"
                                key={hash(data.id)}
                            >
                                <img
                                    src={"/img/" + data.img}
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <p className="card-text">{data.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
Discounts.propTypes = {
    discounts: PropTypes.oneOfType([PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        description: PropTypes.string
    }), PropTypes.array])
};
export default Discounts;
