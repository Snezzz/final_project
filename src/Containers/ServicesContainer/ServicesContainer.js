import React, { Component } from "react";
import Services from "../../Components/Services/index";
import { Route, Router, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { addNewUser } from "../../actions/userActions";
import { loadServices } from "../../actions/serviceActions";

class ServicesContainer extends Component {
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
            .catch(e => console.log(e));
    };
    componentDidMount() {
        this.loadServices();
    }
    render() {
        return (
            <Services services={this.props.services} record={this.recordService} />
        );
    }
}

const mapStateToProps = state => ({
    services: state.servicesReducer
});

const mapDispatchToProps = {
    addNewUser,
    loadServices
};

//обновление состояния связывается с корневым редьюсером
export default connect(mapStateToProps, mapDispatchToProps)(ServicesContainer);
