import React, { Component } from "react";
import {updateUser } from "../../actions/userActions";
import { connect } from "react-redux";
import Form from "../../Components/PersonalCabinet/Form/form";

class UserContainer extends Component {

    render() {
        return (
            <div>
                <Form
                    user={this.props.user}
                    update={this.props.update}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.userReducer
});

const mapDispatchToProps = dispatch => ({
    update:(user)=>{
        dispatch(updateUser(user))
    }
});

//обновление состояния связывается с корневым редьюсером
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
