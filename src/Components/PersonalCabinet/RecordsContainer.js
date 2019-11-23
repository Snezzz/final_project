import React, { Component } from "react";
import "./personalcabinet.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import {
    addRecords,
    changeCategory,
    removeRecord
} from "../../actions/recordsActions";
import Records from "./Records/records";

class RecordsContainer extends Component {
    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
    }
    loadRecords(id, type) {
        let link;
        switch (type) {
            case "admin":
                link = "records";
                break;
            default:
                link = `records/${id}`;
                break;
        }
        fetch(`http://localhost:8080/${link}`, {
            method: "get",
            headers: { "Content-Type": "application/array" }
        })
            .then(response => response.json())
            .then(data => {
                this.props.addRecords(data);
            })
            .catch(e => {
                console.log(e);
            });
    }
    updateRecords(data) {
        fetch("http://localhost:8080/record", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(() => {
                console.log("Success!");
            })
            .catch(e => console.log(e))
            .then(() =>
                this.loadRecords(this.props.user.clientId, this.props.user.login)
            );
    }
    remove(data) {
        const result = window.confirm("Are u sure?");
        if (result) {
            data.type = "canceled";
            this.updateRecords(data);
        }
    }
    update(variant) {
        this.props.changeCategory(variant.toString());
    }
    //load data
    componentDidMount() {
        this.loadRecords(this.props.user.clientId, this.props.user.login);
    }

    render() {
        return (
            <Records
                user={this.props.user}
                records={this.props.records}
                type={this.props.type}
                update={this.update}
                remove={this.remove}
            />
        );
    }
}

const mapStateToProps = state => ({
    records: state.recordsReducer,
    user: state.userReducer,
    type: state.recordsType
});

const mapDispatchToProps = {
    addRecords,
    changeCategory,
    removeRecord
};

//обновление состояния связывается с корневым редьюсером
export default connect(mapStateToProps, mapDispatchToProps)(RecordsContainer);
