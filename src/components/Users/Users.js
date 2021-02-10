import React from "react";

import "./users.css";


const Users = ({name, username, avatar}) => {
    return (
        <div className="user-wrapper">
        <div className="avatar"><img src={avatar} alt="avatar"/></div>
            <span>{name}</span>
            <span>{username}</span>
        </div>
    )
}

export default Users;