import axiosClient from './axiosClient';

const CartAPI = {
	getCarts: (query) => {
		const url = '/api/users/cart';
		return axiosClient.get(url, {
			params: query
		});
	},

	postAddToCart: (query) => {
		const url = '/api/users/cart/add';
		return axiosClient.post(url,{}, {
			params: query
		});
	},

	deleteToCart: (query) => {
		console.log(query)
		const url = '/api/users/cart/delete';
		return axiosClient.delete(url,{
			params: query
		});
	},

	putToCart: (query) => {
		const url = '/api/users/cart/update';
		return axiosClient.put(url,{},{
			params: query
		});
	},
};

export default CartAPI;
