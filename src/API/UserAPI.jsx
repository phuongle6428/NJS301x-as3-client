import axiosClient from './axiosClient';

const UserAPI = {
	getAllData: () => {
		const url = '/users';
		return axiosClient.get(url);
	},

	getDetailData: (id) => {
		const url = `api/users/${id}`;
		return axiosClient.get(url);
	},

	postSignUp: (query) => {
		// const url = `/users/signup/${query}`;
		// return axiosClient.post(url);
		const url = 'auth/users/signup';
		return axiosClient.post(url,query);
	},
	postSignIn: (query) => {
		const url = 'auth/users/signin';
		return axiosClient.post(url,query);
	},
};

export default UserAPI;
