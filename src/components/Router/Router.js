import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from "react-router-dom";

import UsersInfo from "../Users/UsersInfo"
import AddUser from "../AddUser/AddUser"
import "./router.css"

const Navigation = () => {
    return (
        <div>
            <Router>
            <div className="navbar-wrapper">
                 <NavLink to="/users">Users</NavLink>
                 <NavLink to="/addUser">Add Users</NavLink> 
            </div>     
                <Route path="/users" component={UsersInfo} />
                <Route path="/addUser" component={AddUser} /> 
            </Router>
            
        </div>
    )
}

export default Navigation;