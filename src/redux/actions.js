import {ADD_FOLDER, REMOVE_FOLDER} from "./actionTypes";

export const addFolder = (folder) => dispatch => {
	console.log('adding folder');
	dispatch({
		type: ADD_FOLDER,
		payload: {
			folder
		}
	});
};

export const removeFolder = folder => ({
	type: REMOVE_FOLDER,
	payload: {
		folder
	}
});