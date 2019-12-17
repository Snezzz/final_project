import React, { Component } from "react";
import "./record.css";
import "jquery.cookie/jquery.cookie";
import "jquery-datepicker";
import $ from "jquery";

class Record extends Component {
    close = () => {
        $(".form-record").toggleClass("form-record--active");
    };
    record = e => {
        e.preventDefault();
        const clientName = $("#inputName").val();
        const name = $("#inputService").val();
        const clientPhone = $("#inputContacts").val();
        const date = $("#inputDate").val();
        const time = $("#inputTime").val();
        const cost = Number($("#inputCost").val());
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
            $(".form-record").removeClass("form-record--active");
        } else {
            alert("All fields should be filled");
        }
    };

    clear = e => {
        e.preventDefault();
        $("#inputName").val("");
        $("#inputContacts").val("");
        $("#inputDate").val("");
        $("#inputTime option:first").attr("selected", "selected");
    };

    render() {
        return (
            <div className="form-record">
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
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputTime" className="col-sm-4 col-form-label">
                            Time
                        </label>
                        <div className="col-sm-8">
                            <select id="inputTime" className="form-control" defaultValue={1}>
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

export default Record;
