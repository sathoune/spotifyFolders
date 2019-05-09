import {ADD_FOLDER, REMOVE_FOLDER, FETCH_FOLDERS} from "./actionTypes";
import {addFolderToLocalStorage, getFoldersFromLocalStorage} from "../functions";

export const addFolder = (folder) => dispatch => {
	const newFolder = {
		id: folder,
		name: folder,
		albums: []
	};
	addFolderToLocalStorage(newFolder);
	
	dispatch({
		type: ADD_FOLDER,
		payload: {
			folder: newFolder
		}
	})
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