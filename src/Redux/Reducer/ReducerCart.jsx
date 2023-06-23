const initalState = {
	id_user: '',
	listCart: {user: '', products: []},
};

const ReducerCart = (state = initalState, action) => {
	switch (action.type) {
		//Nhận dữ liệu id_user và thay đổi state
		case 'ADD_USER':
			console.log('id_user: ', action.data);

			state = {
				id_user: action.data,
				listCart: {...state.listCart, user: action.data},
			};

			return state;

		case 'ADD_CART':
			console.log(action.data);

			//Lấy dữ liệu được truyền tới
			const data_add_cart = action.data;

			//Lấy dữ liệu có sẵn trong state
			const add_cart = state.listCart;

			if (add_cart.length < 1) {
				add_cart.push(data_add_cart);
			} else {
				//Tìm Vị Trí của sản phẩm đã mua
				const indexCart = add_cart.products.findIndex((value) => {
					return value._id === data_add_cart._id;
				});

				//Nếu này chưa được mua thì mình push vào
				//Còn đã từng mua rồi thì mình update tại vị trí indexCart mà mình vừa tìm được
				if (indexCart < 0) {
					add_cart.products.push(data_add_cart);
					console.log('Push');
				} else {
					add_cart.products[indexCart].count =
						parseInt(add_cart[indexCart].count) +
						parseInt(data_add_cart.count);
					console.log('Update');
				}
			}

			state = {
				id_user: state.id_user,
				listCart: add_cart,
			};

			console.log(state);

			return state;

		case 'DELETE_CART':
			//Lấy dữ liệu được truyền tới
			const data_delete_cart = action.data;

			//Lấy dữ diệu có sẵn trong state
			const delete_cart = state.listCart;

			//Tìm kiểm vị trí mà cần xóa
			const indexDelete = delete_cart.products.findIndex((value) => {
				return value._id === data_delete_cart.idProduct;
			});

			//Xóa theo vị trí
			delete_cart.products.splice(indexDelete, 1);

			state = {
				id_user: state.id_user,
				listCart: delete_cart,
			};

			return state;

		case 'DELETE_ALL_CART':
			const data_delete_all_cart = action.data;

			state = {
				id_user: state.id_user,
				listCart: {user: state.id_user, products: []},
			};

			return state;

		case 'UPDATE_CART':
			const data_update_cart = action.data;

			const update_cart = state.listCart;

			const index = update_cart.products.findIndex((value) => {
				return value._id === data_update_cart.idProduct;
			});

			update_cart.products[index].count = data_update_cart.count;

			state = {
				id_user: state.id_user,
				listCart: update_cart,
			};

			return state;

		default:
			return state;
	}
};

export default ReducerCart;
