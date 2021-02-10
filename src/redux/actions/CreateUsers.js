export default function setUser(data) {
  return async (dispatch) => {
		const response = await fetch('http://domer.tech:9999/users/');
		const json = await response.json();
		dispatch({
			type: "CREATE_USER",
			payload: [json, data],
		});
	};
  }