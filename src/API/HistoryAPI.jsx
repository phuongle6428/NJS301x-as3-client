import axiosClient from './axiosClient';

const HistoryAPI = {
	getHistoryAPI: (query) => {
		const url = '/api/order/histories';
		return axiosClient.get(url, {
			params: query
		});
	},

	getDetail: (id) => {
		const url = `/api/order/histories/${id}`;
		return axiosClient.get(url);
	},
};

export default HistoryAPI;
