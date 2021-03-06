import React, { Component } from "react";
import "./records.css";
import "jquery.cookie/jquery.cookie";
import PropTypes from "prop-types";

class Records extends Component {
    componentDidMount(){
        this.props.update("active");
    }
    render() {
        return (
            <div className="personal-records">
                <div className="records-actions">
                    <div className="row">
                        <div className="col-4 col-sm-4 col-md-4 col-xl-4 col-lg-4">
                            <button
                                className="btn btn-dark button-action"
                                onClick={() => {
                                    this.props.update("active");
                                }}
                            >
                                Active
                            </button>
                        </div>
                        <div className="col-4 col-sm-4 col-md-4 col-xl-4 col-lg-4">
                            <button
                                className="btn btn-dark button-action"
                                onClick={() => {
                                    this.props.update("canceled");
                                }}
                            >
                                Canceled
                            </button>
                        </div>
                        <div className="col-4 col-sm-4 col-md-4 col-xl-4 col-lg-4">
                            <button
                                className="btn btn-dark button-action"
                                onClick={() => {
                                    this.props.update("archived");
                                }}
                            >
                                Archived
                            </button>
                        </div>
                    </div>
                </div>
                <div className="records-list">
                    <table className="table table-bordered">
                        <thead>
                        {this.props.user.login === "admin" ? (
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Service title</th>
                                <th scope="col">Cost</th>
                                <th scope="col">Date</th>
                                <th scope="col">Time</th>
                                <th scope="col">Client name</th>
                                <th scope="col">Client phone</th>
                            </tr>
                        ) : (
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Service title</th>
                                <th scope="col">Cost</th>
                                <th scope="col">Date</th>
                                <th scope="col">Time</th>
                            </tr>
                        )}
                        </thead>
                        <tbody>
                        {Object.values(this.props.records).map(record => {
                            if (record.type.toString() === this.props.type.toString()) {
                                return this.props.user.login === "admin" ? (
                                    <tr key={record.id}>
                                        <th scope="row">{record.id}</th>
                                        <td>{record.name}</td>
                                        <td>{record.cost}</td>
                                        <td>{record.date}</td>
                                        <td>{record.time}</td>
                                        <td>{record.clientName}</td>
                                        <td>{record.clientPhone}</td>
                                        {record.type === "active" ? (
                                            <td>
                                                <button
                                                    className="btn btn-danger  button-delete"
                                                    onClick={() => {
                                                        this.props.remove(record);
                                                    }}
                                                >

                                                    &#10007;
                                                </button>
                                            </td>
                                        ) : null}
                                    </tr>
                                ) : (
                                    <tr key={record.id}>
                                        <th scope="row">{record.id}</th>
                                        <td>{record.name}</td>
                                        <td>{record.cost}</td>
                                        <td>{record.date}</td>
                                        <td>{record.time}</td>
                                        {record.type === "active" ? (
                                            <td>
                                                <button
                                                    className="btn btn-danger button-delete"
                                                    onClick={() => {
                                                        this.props.remove(record);
                                                    }}
                                                >

                                                    &#10007;
                                                </button>
                                            </td>
                                        ) : null}
                                    </tr>
                                );
                            }
                         return null
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
Records.propTypes = {
  update: PropTypes.func,
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
    records:PropTypes.oneOfType([PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        cost: PropTypes.number,
        date: PropTypes.string,
        time: PropTypes.string,
        type: PropTypes.string
    }), PropTypes.array]),
  remove: PropTypes.func
};
export default Records;
