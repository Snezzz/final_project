import React, { Component } from "react";
import Header from "../Header/index";
import Navigation from "../Navigation/index";
import Footer from "../Footer/index";
import RegistrationContainer from "../../Containers/RegistrationContainer/index";
import './main.css'
import PropTypes from "prop-types";

class Main extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <Header />
                    </div>
                    <div className="col-sm-12">
                        <Navigation />
                    </div>
                    <RegistrationContainer />
                    <div className="col-sm-12 content">
                        {this.props.children}
                        </div>
                    <div className="col-sm-12">
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}
Main.propTypes = {
    Header: PropTypes.element,
    Navigation: PropTypes.element,
    RegistrationContainer: PropTypes.element,
    Footer: PropTypes.element,
    children: PropTypes.element
};
export default Main;
