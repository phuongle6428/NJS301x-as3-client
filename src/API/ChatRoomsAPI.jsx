import axiosClient from './axiosClient';

const ChatRoomsAPI = {
	getMessageByRoomId: (roomId) => {
		const url = `/api/chat/messages/${roomId}`;
		return axiosClient.get(url);
	},

	createNewRoom: () => {
		const url = '/api/chat/create';
		return axiosClient.get(url);
	},
	addMessage: (body) => {
		const url = '/api/chat/messages';
		return axiosClient.post(url, body);
	},
};

export default ChatRoomsAPI;
