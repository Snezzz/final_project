import React, { Component } from "react";
import "./personalcabinet.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PersonalCabinet from "./personalcabinet";
import UserContainer from "../../Containers/UserContainer/index";
import { connect } from "react-redux";
import RecordsContainer from "./RecordsContainer";
import {NoMatchPage} from "../../App";
import PropTypes from "prop-types";

class CabinetContainer extends Component {
    render() {
        return (
            <BrowserRouter>
                <PersonalCabinet user={this.props.user}>
                    <Switch>
                        <Route path="/cabinet/edit" component={UserContainer} />
                        <Route path="/cabinet/records" component={RecordsContainer} />
                        <Route component={NoMatchPage}/>
                    </Switch>
                </PersonalCabinet>
            </BrowserRouter>
        );
    }
}
const mapStateToProps = state => ({
    user: state.userReducer
});

CabinetContainer.propTypes = {
  PersonalCabinet: PropTypes.element,
  user: PropTypes.object
};
//обновление состояния связывается с корневым редьюсером
export default connect(mapStateToProps)(CabinetContainer);
