import {GET_TOKEN} from "../actions/actionTypes";

export const initialState = {
	token: null,
	albums: [],
	albumProgress: 0,
};

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_TOKEN: {
			return {
				...state,
				token: action.payload.token
			}
		}
		default:
			return state;
	}
};