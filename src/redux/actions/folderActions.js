import {ADD_FOLDER, REMOVE_FOLDER, FETCH_FOLDERS, ERROR, ADD_ALBUM_TO_FOLDER} from "./actionTypes";
import {addFolderToLocalStorage, getFoldersFromLocalStorage, setFoldersToLocalStorage} from "../../functions";

export const addFolder = (folder) => dispatch => {
	
	const result = addFolderToLocalStorage(folder);
	
	if (result.code === 201) {
		dispatch({
			type: ADD_FOLDER,
			payload: {
				folder: result.body
			}
		})
	} else if (result.code >= 400 && result.code < 500) {
		console.log(result.err);
		dispatch({
			type: ERROR,
			payload: result.err
		});
	} else {
		dispatch({
			type: ERROR,
			payload: "Unknown code"
		})
	}
};

export const fetchFolders = () => dispatch => {
	const folders = getFoldersFromLocalStorage();
	dispatch({
		type: FETCH_FOLDERS,
		payload: folders
	})
};

export const removeFolder = folderId => dispatch => {
	const folders = getFoldersFromLocalStorage();
	const filteredFolders = folders.filter(folder => folder.id !== folderId)
	setFoldersToLocalStorage(filteredFolders);
	
	dispatch({
		type: REMOVE_FOLDER,
		payload: {
			folders: filteredFolders
		}
	})
};

export const addAlbumToFolder = (folder, albumData) => dispatch => {
	console.log(folder);
	console.log(albumData);
	dispatch({
		type: ADD_ALBUM_TO_FOLDER,
		payload: {
			folder: folder,
			album: albumData
		}
	})
};