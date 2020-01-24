import React, { Component } from "react";
import Services from "../../Components/Services/index";
import { connect } from "react-redux";
import { servicesList } from "../../actions/serviceActions";
import PropTypes from 'prop-types';


class ServicesContainer extends Component {

    componentDidMount() {
        this.props.loadServices();
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

const mapDispatchToProps = dispatch => ({
    loadServices:() =>{
        dispatch(servicesList())
    }
});

ServicesContainer.propTypes = {
  loadServices: PropTypes.func,
  services: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};
//обновление состояния связывается с корневым редьюсером
export default connect(mapStateToProps, mapDispatchToProps)(ServicesContainer);
