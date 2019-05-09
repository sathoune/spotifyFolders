import {FETCH_ALBUMS} from "../actions/actionTypes";

export const inistialState = {
	albums: []
};

export const albumReducer = (state=inistialState, action) => {
	switch(action.type){
		case FETCH_ALBUMS: {
			return state;
		}
		default: {
			return state;
		}
	}
};