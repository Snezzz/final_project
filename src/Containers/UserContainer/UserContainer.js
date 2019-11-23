import React, { Component } from "react";
import { Route, Router, Switch } from "react-router-dom";
import { addNewUser } from "../../actions/userActions";
import { connect } from "react-redux";
import Form from "../../Components/PersonalCabinet/Form/form";

class UserContainer extends Component {
    update = user => {
        fetch("http://localhost:8080/user", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        })
            .then(() => {
                alert("Successful update!");
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        return (
            <div>
                <Form
                    user={this.props.user}
                    update={this.update}
                    addUser={this.props.addNewUser}
                />
            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
