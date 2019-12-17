import React, { Component } from "react";
import {load} from "../../actions/companyActions";
import Default from "../../Components/Default/default";
import { connect } from "react-redux";

class DefaultContainer extends Component {

    componentDidMount() {
        this.props.load('http://localhost:8080/information');
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

const mapDispatchToProps = dispatch => ({
    load:(link) =>{
        dispatch(load(link))
    }
});

//обновление состояния связывается с корневым редьюсером
export default connect(mapStateToProps, mapDispatchToProps)(DefaultContainer);
