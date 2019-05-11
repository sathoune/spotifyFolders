import {FETCH_ALBUMS} from "../actions/actionTypes";

export const inistialState = {
	albums: []
};

export const albumReducer = (state=inistialState, action) => {
	switch(action.type){
		case FETCH_ALBUMS: {
			return {
				...state,
				albums: [...action.payload, ...state.albums],
				albumProgress: action.albumProgress
			};
		}
		default: {
			return state;
		}
	}
};