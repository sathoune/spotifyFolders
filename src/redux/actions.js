import {ADD_FOLDER, REMOVE_FOLDER, FETCH_FOLDERS, ERROR} from "./actionTypes";
import {addFolderToLocalStorage, getFoldersFromLocalStorage} from "../functions";

export const addFolder = (folder) => dispatch => {
	
	const result = addFolderToLocalStorage(folder);
	
	if (result.code === 201) {
		dispatch({
			type: ADD_FOLDER,
			payload: {
				folder: result.body
			}
		})
	} else {
		console.log(result.err);
		dispatch({
			type: ERROR,
			payload: result.err
		});
	}
};

export const fetchFolders = () => dispatch => {
	const folders = getFoldersFromLocalStorage();
	dispatch({
		type: FETCH_FOLDERS,
		payload: folders
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