const initialState = {
	idUser: '',
	token: ''
};

const ReducerSession = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_SESSION':
			console.log('10: ', action.data);
			const stateLogin = {...state, idUser: action.data.userId, token: action.data.token};
			return stateLogin;
		case 'DELETE_SESSION':
			console.log('13: ', action.data);
			const stateLogout = {...state, idUser: '', token: ''};
			return stateLogout;
		default:
			return state;
	}
};

export default ReducerSession;
