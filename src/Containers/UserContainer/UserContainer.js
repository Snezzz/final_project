import React, { Component } from "react";
import {updateUser } from "../../actions/userActions";
import { connect } from "react-redux";
import Form from "../../Components/PersonalCabinet/Form/form";
import PropTypes from 'prop-types';


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
UserContainer.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        firstName: PropTypes.string,
        secondName: PropTypes.string,
        surName: PropTypes.string,
        login: PropTypes.string,
        phoneNumber: PropTypes.string,
        email: PropTypes.string,
        password: PropTypes.string
    }),
    update: PropTypes.func
};
//обновление состояния связывается с корневым редьюсером
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
