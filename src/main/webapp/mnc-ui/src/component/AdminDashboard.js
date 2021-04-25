import React, { Component } from "react";
import { Link } from "react-router-dom";


class AdminDashboard extends Component{

    constructor(props) {
        super(props);

    }

    render() {

        return(
            <div>
                <Link to="/SignIn">Logout</Link><br/><br/>
                <Link to="/SignUp">Add Employee</Link><br/><br/>
                <Link to="allEmployees">All Employees</Link>
            </div>
            
        );

    }
}

export default AdminDashboard;