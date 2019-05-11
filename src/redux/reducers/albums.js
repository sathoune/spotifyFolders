import {FETCH_ALBUMS} from "../actions/actionTypes";

export const initialState = {
	albums: [],
	albumProgress: 0
};

export const albumReducer = (state=initialState, action) => {
	switch(action.type){
		case FETCH_ALBUMS: {
			return {
				...state,
				albums: [...action.payload, ...state.albums],
				albumProgress: action.albumProgress
			};
		}
		default: return state;
	}
};