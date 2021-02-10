import userArr from "../../components/Users/UsersData";

const instantState = {
  users: {
    data: [...userArr],
  }
}

const GetData = (state = instantState, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return { ...state, users: {...state.users, data:[...action.payload].flat()}};
    default:
      return {...state};
  }   
}

export default GetData;