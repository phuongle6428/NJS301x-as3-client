export const addSession = (data) => {
	return {
		type: 'ADD_SESSION',
		data 
	};
};

export const deleteSession = (data) => {
	localStorage.setItem('token_user', '')
	localStorage.setItem('id_user', '')
	return {
		type: 'DELETE_SESSION',
		data,
	};
};
