import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./default.css";
import hash from "js-hash-code";

class Default extends Component {
    render() {
        return (
            <div className="default">
                <div className="container-fluid">
                    <div className="row">
                        {this.props.data.map(data => (
                            <div
                                className="card col-12 col-sm-12 col-md-6 col-xl-4 col-lg-4"
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
Default.propTypes = {
  data: PropTypes.oneOfType([PropTypes.shape({
      id: PropTypes.number,
      img: PropTypes.string,
      description: PropTypes.string
  }),PropTypes.array])
};

export default Default;
