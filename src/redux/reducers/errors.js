import {ERROR} from "../actions/actionTypes";

export const initialState = {};

export const errorReducer = (state=initialState, action) => {
	switch(action.type) {
		case ERROR: {
			return {
				...state,
				err: action.payload
			}
		}
		default: return state
	}
};