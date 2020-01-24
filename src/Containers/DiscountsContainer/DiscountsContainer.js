import React, { Component } from "react";
import {load} from "../../actions/companyActions";
import { connect } from "react-redux";
import Discounts from "../../Components/Dicsounts/discounts";
import PropTypes from 'prop-types';

class DiscountsContainer extends Component {

    componentDidMount() {
        this.props.load('http://localhost:8080/discounts');
    }
    render() {
        return Object.keys(this.props.discounts).length > 0 ? (
            <Discounts discounts={this.props.discounts} />
        ) : null;
    }
}

const mapStateToProps = state => ({
    discounts: state.companyReducer
});

const mapDispatchToProps = dispatch => ({
    load:(link) =>{
        dispatch(load(link))
    }
});
DiscountsContainer.propTypes = {
  discounts: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};
//обновление состояния связывается с корневым редьюсером
export default connect(mapStateToProps, mapDispatchToProps)(DiscountsContainer);
