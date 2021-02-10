export default function setUser(user) {
  return async (dispatch) => {
		const response = await fetch('http://domer.tech:9999/users/');
		const json = await response.json();
    console.log(json);
		dispatch({
			type: "CREATE_USER",
			payload: json,
		});
	};
  }