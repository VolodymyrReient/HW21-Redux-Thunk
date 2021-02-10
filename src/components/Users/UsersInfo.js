import React from "react";
import { connect } from 'react-redux';

import User from "./Users";

const UsersInfo = ({usersData}) => {
    return (
        <div>
        
        {usersData && usersData.map((el) => (el.data).map((el, i) => {return <User name={el.name} avatar={el.avatar} username={el.username} key={i}/>  }))}
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
      usersData: state.GetData.users.data
  };
};

export default connect(mapStateToProps)(UsersInfo);