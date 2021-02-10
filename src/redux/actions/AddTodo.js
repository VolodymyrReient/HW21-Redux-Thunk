import axios from 'axios';

import setUser from "./CreateUsers"

const addTodo = ({ name, nickname, image }) => {
  return dispatch => {
    dispatch(setUser());
    axios
      .post(`http://domer.tech:9999/`, {
        name, 
        nickname, 
        image
      })
      .then(res => {
        dispatch(setUser(res.data));
      })
  };
};

export default addTodo;