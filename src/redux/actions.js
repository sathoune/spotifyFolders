import {ADD_FOLDER, REMOVE_FOLDER, FETCH_FOLDERS} from "./actionTypes";

export const addFolder = (folder) => dispatch => {
	dispatch({
		type: ADD_FOLDER,
		payload: {
			folder
		}
	})
};

export const fetchFolders = () => dispatch => {
	const folderString = localStorage.folders;
	dispatch({
		type: FETCH_FOLDERS,
		payload: JSON.stringify(folderString)
	})
};

export const removeFolder = folder => dispatch => (
	dispatch({
		type: REMOVE_FOLDER,
		payload: {
			folder
		}
	})
);