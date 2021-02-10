import React from "react";
import { connect } from 'react-redux';

import User from "./Users";

const UsersInfo = ({usersData}) => {
    return (
        <div>
        {console.log(usersData)}
            {usersData && usersData.map((el, i) => {return(<User {...el} key={i}/>)})}
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state.GetData.users.data)
  return {
      usersData: state.GetData.users.data,
  };
};

export default connect(mapStateToProps)(UsersInfo);