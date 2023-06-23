import axiosClient from './axiosClient';

const CheckoutAPI = {
	postEmail: (query) => {
		const url = '/api/order/checkout';
		return axiosClient.post(url, query);
	},
};

export default CheckoutAPI;
