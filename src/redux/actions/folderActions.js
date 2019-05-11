import {
	ADD_FOLDER,
	REMOVE_FOLDER,
	FETCH_FOLDERS,
	ERROR,
	ADD_ALBUM_TO_FOLDER,
	REMOVE_ALBUM_FROM_FOLDER
} from "./actionTypes";
import {
	addAlbumToFolderToLocalStorage,
	addFolderToLocalStorage,
	getFoldersFromLocalStorage,
	removeAlbumFromFolderInLocalStorage,
	setFoldersToLocalStorage
} from "../../functions";

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
	const modifiedFolders = addAlbumToFolderToLocalStorage(folder, albumData);
	dispatch({
		type: ADD_ALBUM_TO_FOLDER,
		payload: modifiedFolders
	})
};

export const removeAlbumFromFolder = (albumId, folder) => dispatch => {
	const modifiedFolders = removeAlbumFromFolderInLocalStorage(albumId, folder);
	dispatch({
		type: REMOVE_ALBUM_FROM_FOLDER,
		payload: modifiedFolders
	})
};