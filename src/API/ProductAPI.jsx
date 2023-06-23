import axiosClient from './axiosClient';

const ProductAPI = {
	getAPI: () => {
		const url = 'api/general/products';
		return axiosClient.get(url);
	},

	getCategory: (query) => {
		// const url = `api/general/products/category${query}`;
		const url = 'api/general/products/category';
		return axiosClient.get(url, {params: {category: query}});
	},

	getDetail: (id) => {
		const url = `api/general/products/${id}`;
		return axiosClient.get(url);
	},

	getPagination: (query) => {
		const url = `api/general/products/pagination${query}`;
		return axiosClient.get(url);
		// const url = 'api/general/products/pagination';
		// return axiosClient.get(url, {params: {page: query}});
	},
};

export default ProductAPI;
