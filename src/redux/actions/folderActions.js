import {
	ADD_FOLDER,
	REMOVE_FOLDER,
	FETCH_FOLDERS,
	ERROR,
	ADD_ALBUM_TO_FOLDER,
	REMOVE_ALBUM_FROM_FOLDER
} from "./actionTypes";
import {
	addAlbumToFolderInAPI,
	addFolderToAPI,
	getFoldersFromAPI,
	removeAlbumFromFolderInAPI, removeFolderFromAPI,
} from "../../functions";

export const addFolder = (folder) => dispatch => {
	
	const result = addFolderToAPI(folder);
	if (result.code === 201) {
		dispatch({
			type: ADD_FOLDER,
			payload: {
				folder: [result.body]
			}
		});
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
		});
	}
};

export const fetchFolders = () => (dispatch) => {
	const folders = getFoldersFromAPI();
	dispatch({
		type: FETCH_FOLDERS,
		payload: folders
	});
};

export const removeFolder = folderId => dispatch => {
	dispatch({
		type: REMOVE_FOLDER,
		payload: {
			folders: removeFolderFromAPI(folderId)
		}
	});
};

export const addAlbumToFolder = (folder, albumData) => dispatch => {
	const result = addAlbumToFolderInAPI(folder, albumData);
	if (result.code === 201) {
		dispatch({
			type: ADD_ALBUM_TO_FOLDER,
			payload: result.folders
		});
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
		});
	}
};

export const removeAlbumFromFolder = (albumId, folder) => dispatch => {
	const result = removeAlbumFromFolderInAPI(albumId, folder);
	
	if (result.code === 200) {
		dispatch({
			type: REMOVE_ALBUM_FROM_FOLDER,
			payload: result.folders
		});
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
		});
	}
};