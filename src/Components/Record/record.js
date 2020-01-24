import React, { Component } from "react";
import "./record.css";
import "jquery.cookie/jquery.cookie";
import "jquery-datepicker";
import PropTypes from 'prop-types';

class Record extends Component {
    clientName = (name) => {this._clientName = name};
    name = (name) => {this._name = name};
    clientPhone = (phone) => {this._phone = phone};
    date = (date) => {this._date = date};
    time = (time) => {this._time = time};
    id = (id) => {this._id = id};
    cost = (cost) => {this._cost = cost};
    form  = (form) =>{this._form = form};

    close = () => {
        this._form.className = "form-record";
    };
    record = e => {
        e.preventDefault();
        const clientName = this._clientName.value;
        const name = this._name.value;
        const clientPhone = this._phone.value;
        const date = this._date.value;
        const time = this._time.value;
        const cost = Number(this._cost.value);
        const id = this.props.user.clientId;

        //final data to backend
        const newService = {
            clientId: id,
            clientName: clientName,
            clientPhone: clientPhone,
            cost: cost,
            date: date,
            name: name,
            time: time,
            type: "active"
        };
        if (
            name !== undefined &&
            clientPhone !== "" &&
            date !== "" &&
            time !== "Choose..."
        ) {
            this.props.record(newService);
            alert("You were recorded!");
            this._form.className = "form-record";
        } else {
            alert("All fields should be filled");
        }
    };

    clear = e => {
        e.preventDefault();
        this._clientName.value = "";
        this._phone.value = "";
        this._date.value = "";
    };

    render() {
        return (
            <div className="form-record" ref={this.form}>
                <form>
                    <div className="exit">
                        <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={this.close}
                        >
                            X
                        </button>
                    </div>
                    <div className="form-group row ">
                        <img id="logo" src="/img/4.png" alt=""/>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputService" className="col-sm-4 col-form-label">
                            Service
                        </label>
                        <div className="col-sm-8">
                            <input
                                type="text"
                                className="form-control"
                                id="inputService"
                                placeholder=""
                                defaultValue={this.props.service}
                                ref={this.name}
                                disabled
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputCost" className="col-sm-4 col-form-label">
                            Cost
                        </label>
                        <div className="col-sm-8">
                            <input
                                type="text"
                                className="form-control"
                                id="inputCost"
                                placeholder=""
                                defaultValue={this.props.cost}
                                ref={this.cost}
                                disabled
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputName" className="col-sm-4 col-form-label">
                            Name
                        </label>
                        <div className="col-sm-8">
                            <input
                                type="text"
                                className="form-control"
                                id="inputName"
                                placeholder=""
                                defaultValue={this.props.user.firstName || ""}
                                ref={this.clientName}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputContacts" className="col-sm-4 col-form-label">
                            Contacts
                        </label>
                        <div className="col-sm-8">
                            <input
                                type="number"
                                className="form-control"
                                id="inputContacts"
                                placeholder="89562221721"
                                defaultValue={Number(this.props.user.phoneNumber) || ""}
                                ref={this.clientPhone}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputDate" className="col-sm-4 col-form-label">
                            Date
                        </label>
                        <div className="col-sm-8">
                            <input
                                type="date"
                                className="form-control"
                                min={new Date().getTime()}
                                max="2019-12-31"
                                id="inputDate"
                                ref={this.date}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputTime" className="col-sm-4 col-form-label">
                            Time
                        </label>
                        <div className="col-sm-8">
                            <select id="inputTime" className="form-control" defaultValue={1} ref={this.time}>
                                <option key="0">Choose...</option>
                                <option key="1">10:00-11:00</option>
                                <option key="2">11:00-12:00</option>
                                <option key="3">12:00-13:00</option>
                                <option key="4">13:00-14:00</option>
                                <option key="5">15:00-16:00</option>
                                <option key="6">16:00-17:00</option>
                                <option key="7">17:00-18:00</option>
                                <option key="8">18:00-19:00</option>
                            </select>
                        </div>
                    </div>
                    <div className="actions">
                        <div className="form-group row">
                            <div className="col-sm-12 ">
                                <button className="btn btn-secondary" onClick={this.record}>
                                    Record
                                </button>
                                <button className="btn btn-primary" onClick={this.clear}>
                                    Clear
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
Record.propTypes = {
    service: PropTypes.string,
    cost: PropTypes.number,
    user: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        firstName:PropTypes.string,
        secondName:PropTypes.string,
        surName:PropTypes.string,
        login: PropTypes.string,
        phoneNumber:PropTypes.string,
        email: PropTypes.string,
        password:PropTypes.string
    }),
    record: PropTypes.func
};
export default Record;
