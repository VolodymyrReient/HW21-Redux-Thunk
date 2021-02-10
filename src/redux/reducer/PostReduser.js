import userArr from "../../components/Users/UsersData";

const instantState = {
  users: {
    data: userArr,
  }
}

const GetData = (state = instantState, action) => {
  switch (action.type) {
    case "CREATE_USER":
      console.log(action.payload)
      return { ...state, users: [state.users, action.payload]};
    default:
      return state;
  }   
}

export default GetData;