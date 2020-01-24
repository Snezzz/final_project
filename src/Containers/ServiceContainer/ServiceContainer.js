import React, { Component } from "react";
import Service from "../../Components/Services/Service/index";
import { connect } from "react-redux";
import {getServiceInfo, servicesList} from "../../actions/serviceActions";
import {recordService} from "../../actions/recordsActions";
import PropTypes from 'prop-types';

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
ServiceContainer.propTypes = {
  getService: PropTypes.func,
  loadServices: PropTypes.func,
  record: PropTypes.func,
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
  service: PropTypes.object,
  services: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};
//обновление состояния связывается с корневым редьюсером
export default connect(mapStateToProps, mapDispatchToProps)(ServiceContainer);
