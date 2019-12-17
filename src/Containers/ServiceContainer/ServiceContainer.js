import React, { Component } from "react";
import Service from "../../Components/Services/Service/index";
import { connect } from "react-redux";
import {getServiceInfo, servicesList} from "../../actions/serviceActions";
import {recordService} from "../../actions/recordsActions";

class ServiceContainer extends Component {

    componentDidMount() {
        const url = window.location.pathname.split("/")[2].toString();
        this.props.getService(url);
        this.props.loadServices();

    }

    render() {
        return (
            <Service
                record={this.props.record}
                user={this.props.user}
                getService={this.props.getService}
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
const mapDispatchToProps = dispatch => ({
    getService:(id)=>{
        dispatch(getServiceInfo(id))
    },
    loadServices:() =>{
        dispatch(servicesList())
    },
    record:(data)=>{
      dispatch(recordService(data))
    }
});

//обновление состояния связывается с корневым редьюсером
export default connect(mapStateToProps, mapDispatchToProps)(ServiceContainer);
