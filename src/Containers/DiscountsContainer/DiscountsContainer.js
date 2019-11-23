import React, { Component } from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { loadDiscounts } from "../../actions/companyActions";
import { connect } from "react-redux";
import Discounts from "../../Components/Dicsounts/discounts";

class DiscountsContainer extends Component {
    loadDiscounts = () => {
        fetch("http://localhost:8080/discounts", {
            method: "get",
            headers: { "Content-Type": "application/json" }
        })
            .then(data =>
                data.json().then(data => {
                    this.props.loadDiscounts(data);
                })
            )
            .catch(e => console.log(e));
    };
    componentWillMount() {
        this.loadDiscounts();
    }
    render() {
        return Object.keys(this.props.discounts).length > 0 ? (
            <Discounts discounts={this.props.discounts} />
        ) : null;
    }
}

const mapStateToProps = state => ({
    discounts: state.discountsReducer
});

const mapDispatchToProps = {
    loadDiscounts
};

//обновление состояния связывается с корневым редьюсером
export default connect(mapStateToProps, mapDispatchToProps)(DiscountsContainer);
