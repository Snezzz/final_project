import React, { Component } from "react";
import "./service.css";
import Navigation from "../Navigation/index";
import Record from "../../Record/index";
import $ from "jquery";
import "jquery.cookie/jquery.cookie";
import PropTypes from "prop-types";

class Service extends Component {
    //record to the service
    record = () => {
        $(".form-record").toggleClass("form-record--active");
    };

    loadData = id => {
        this.props.getService(id, this.props.services);
    };

    render() {
        return (
            <div className="service">
                <div className="row">
                    <Record
                        login={true}
                        service={this.props.service.name}
                        record={this.props.record}
                        cost={this.props.service.cost}
                        user={this.props.user}
                    />
                    <div className="col-sm-4">
                        <Navigation data={this.props.services} loadData={this.loadData} />
                    </div>
                    <div className="col-sm-8">
                        <div className="service-name">
                            <h1>{this.props.service.name}</h1>
                        </div>
                        <div className="service-images">
                            <img src={"/img/" + this.props.service.img1} alt="wm" />
                            <img src={"/img/" + this.props.service.img2} alt="" />
                            <img src={"/img/" + this.props.service.img3} alt="" />
                        </div>
                        <div className="service-cost">
                            <h2>{this.props.service.cost}</h2>
                        </div>
                        <div className="service-information">
                            {this.props.service.description}
                        </div>
                        <div className="service-action">
                            <button
                                className="btn btn-warning record-button"
                                onClick={this.record}
                            >
                                Record
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
Service.propTypes = {
  getService: PropTypes.func,
    service: PropTypes.object,
    services: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
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
    record: PropTypes.func
};
export default Service;
