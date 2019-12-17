import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ServicesContainer from "./Containers/ServicesContainer/index";
import Main from "./Components/Main/index";
import $ from "jquery";
import ServiceContainer from "./Containers/ServiceContainer/index";
import { createStore,applyMiddleware } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import CabinetContainer from "./Components/PersonalCabinet/CabinetContainer";
import DefaultContainer from "./Containers/DefaultContainer/index";
import DiscountsContainer from "./Containers/DiscountsContainer/index";
import Information from "./Components/Information/index";
import { addNewUser } from "./actions/userActions";
import { connect } from "react-redux";
import thunk from 'redux-thunk'

export const store = createStore(rootReducer,applyMiddleware(thunk));

export const NoMatchPage = () => {
    return (
        <div className="not-found-page">
            <h3>
        <span className="badge badge-danger">
          We do not have such a section(404)
        </span>
            </h3>
        </div>
    );
};

class App extends Component {
    componentDidMount() {
        if ($.cookie("User")) {
            this.props.addNewUser(JSON.parse($.cookie("User")));
        }
    }

    render() {
        return (
            <Router>
                <Main>
                    <Switch>
                        <Route path="/" exact component={DefaultContainer} />
                        <Route path="/services" component={ServicesContainer} />
                        <Route path="/service/:id" component={ServiceContainer} />
                        <Route path="/discounts" component={DiscountsContainer} />
                        <Route path="/cabinet" component={CabinetContainer} />
                        <Route path="/info" component={Information} />
                        <Route component={NoMatchPage} />
                    </Switch>
                </Main>
            </Router>
        );
    }
}

const mapStateToProps = state => ({
    user: state.userReducer
});

const mapDispatchToProps = {
    addNewUser
};

//обновление состояния связывается с корневым редьюсером
export default connect(mapStateToProps, mapDispatchToProps)(App);
