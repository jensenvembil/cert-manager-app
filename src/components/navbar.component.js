import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to={"/"} className="navbar-brand">Certificate Management App</Link>
                <div className="collpase navbar-collapse">
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/add"} className="nav-link">Add Certificate</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/edit/:id"} className="nav-link">Edit Certificate</Link>
                        </li>
                    </div>
                </div>

            </nav>


        );
    }
}