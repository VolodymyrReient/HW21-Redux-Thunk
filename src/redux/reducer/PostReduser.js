import userArr from "../../components/Users/UsersData";

const instantState = {
    users: userArr
}

const GetData = (state = instantState, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return { ...state, users: [...state.users, action.payload] };
    default:
      return state;
  }   
}

export default GetData;