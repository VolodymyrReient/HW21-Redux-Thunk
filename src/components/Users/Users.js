import React from "react";

import "./users.css";


const Users = ({name, nickname, image}) => {
    return (
        <div className="user-wrapper">
        <div className="avatar"><img src={image} alt="avatar"/></div>
            <span>{name}</span>
            <span>{nickname}</span>
        </div>
    )
}

export default Users;