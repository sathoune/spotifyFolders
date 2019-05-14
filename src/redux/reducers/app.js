import {GET_TOKEN, SET_DEMO} from "../actions/actionTypes";

export const initialState = {
	token: null,
	demo: false
};

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_TOKEN: {
			return {
				...state,
				token: action.payload.token
			}
		}
		
		case SET_DEMO: {
			return {
				...state,
				demo: !state.demo
			}
		}
		default:
			return state;
	}
};