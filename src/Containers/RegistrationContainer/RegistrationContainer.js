import React, { Component } from "react";
import { addUser,login} from "../../actions/userActions";
import { changeStatus } from "../../actions/userActions";
import { connect } from "react-redux";
import Form from "../../Components/Form/form";

class RegistrationContainer extends Component {


    render() {
        let className;
        if (!this.props.login) className = "form--wrong";
        else className = "form form--active";

        return (
            <Form
                addUser={this.props.addUser}
                logIn={this.props.logIn}
                class={className}
                change={this.props.changeStatus}
                login={this.props.login}
            />
        );
    }
}

const mapStateToProps = state => ({
    user: state.userReducer,
    records: state.recordsReducer,
    login: state.loginReducer
});

const mapDispatchToProps = dispatch => ({
    addUser:(user)=>{
        dispatch(addUser(user));
    },

    changeStatus:(val)=>dispatch(changeStatus(val)),
    logIn:(log,password) =>{
      dispatch(login(log,password))
    }
});

//обновление состояния связывается с корневым редьюсером
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegistrationContainer);
