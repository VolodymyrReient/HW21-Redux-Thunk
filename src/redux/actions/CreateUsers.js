export default function setUser(users) {
  return async (dispatch) => {
		const response = await fetch('http://domer.tech:9999/users/');
		const json = await response.json();
		dispatch({
			type: "CREATE_USER",
			payload: [{json}, {users}],
		});
	};
  }