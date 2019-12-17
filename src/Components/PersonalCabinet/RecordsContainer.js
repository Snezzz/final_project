import React, { Component } from "react";
import "./personalcabinet.css";
import { connect } from "react-redux";
import {
    updateRecords,
    changeCategory,
    loadRecords
} from "../../actions/recordsActions";
import Records from "./Records/records";

class RecordsContainer extends Component {

    remove = data => {
        const result = window.confirm("Are u sure?");
        if (result) {
            data.type = "canceled";
            this.props.updateRecords(data,this.props.user.clientId, this.props.user.login);
        }
    };
    update = variant => {
        this.props.changeCategory(variant.toString());
    };
    //load data
    componentDidMount() {
        this.props.loadRecords(this.props.user.clientId, this.props.user.login);
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

const mapDispatchToProps = dispatch => ({
    loadRecords:(id,type)=>{
        dispatch(loadRecords(id,type));
    },
    changeCategory:(variant)=>{
        dispatch(changeCategory(variant));
    },
    updateRecords:(data,id,type)=>{
        dispatch(updateRecords(data,id,type));
    }
});

//обновление состояния связывается с корневым редьюсером
export default connect(mapStateToProps, mapDispatchToProps)(RecordsContainer);
