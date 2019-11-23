import React, { Component } from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { loadInformation } from "../../actions/companyActions";
import Default from "../../Components/Default/default";
import { connect } from "react-redux";

class DefaultContainer extends Component {
    loadInformation = () => {
        fetch("http://localhost:8080/information", {
            method: "get",
            headers: { "Content-Type": "application/json" }
        })
            .then(data =>
                data.json().then(data => {
                    this.props.loadInformation(data);
                })
            )
            .catch(e => console.log(e));
    };
    componentWillMount() {
        this.loadInformation();
    }
    render() {
        return Object.keys(this.props.information).length > 0 ? (
            <Default data={this.props.information} />
        ) : null;
    }
}

const mapStateToProps = state => ({
    information: state.companyReducer
});

const mapDispatchToProps = {
    loadInformation
};

//обновление состояния связывается с корневым редьюсером
export default connect(mapStateToProps, mapDispatchToProps)(DefaultContainer);
