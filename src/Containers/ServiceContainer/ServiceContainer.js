import React, { Component } from "react";
import { Route, Router, Switch } from "react-router-dom";
import Service from "../../Components/Services/Service/index";
import { connect } from "react-redux";
import { getService, loadServices } from "../../actions/serviceActions";

class ServiceContainer extends Component {
    loadServices = () => {
        let data = [];
        fetch(`http://localhost:8080/services`, {
            method: "get",
            headers: { "Content-Type": "application/json" }
        })
            .then(response => response.json())
            .then(response => {
                for (let service of response) {
                    data.push(service);
                }
            })
            .then(() => {
                this.props.loadServices(data);
            })
            .then(() => {
                this.getData(window.location.pathname.split("/")[2].toString());
            })
            .catch(e => console.log(e));
    };

    recordService = data => {
        fetch("http://localhost:8080/record", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(() => {
                console.log("Success!");
            })
            .catch(e => console.log(e));
    };

    getData = id => {
        fetch(`http://localhost:8080/service/${id}`, {
            method: "get"
        })
            .then(data => data.json())
            .catch(e => console.log(e))
            .then(data => {
                this.props.getService(data);
            })
            .then(() => {
                console.log(this.props);
            });
    };

    componentWillMount() {
        this.loadServices();
    }

    render() {
        return (
            <Service
                record={this.recordService}
                user={this.props.user}
                getService={this.getData}
                service={this.props.service}
                services={this.props.services}
            />
        );
    }
}

const mapStateToProps = state => ({
    user: state.userReducer,
    services: state.servicesReducer,
    service: state.serviceReducer
});
const mapDispatchToProps = {
    getService,
    loadServices
};

//обновление состояния связывается с корневым редьюсером
export default connect(mapStateToProps, mapDispatchToProps)(ServiceContainer);
