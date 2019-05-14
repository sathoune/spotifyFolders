import {
	ADD_FOLDER,
	FETCH_FOLDERS,
	REMOVE_FOLDER,
	ADD_ALBUM_TO_FOLDER,
	REMOVE_ALBUM_FROM_FOLDER, SET_FOLDERS, REMOVE_FOLDERS
} from "../actions/actionTypes";

export const initialState = {
	folders: []
};

export const folderReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_FOLDER: {
			return {
				...state,
				folders: [...action.payload.folder, ...state.folders]
			};
		}
		case FETCH_FOLDERS: {
			return {
				...state,
				folders: [...action.payload, ...state.folders]
			}
		}
		case REMOVE_FOLDER: {
			return {
				...state,
				folders: [...action.payload.folders]
			}
		}
		case ADD_ALBUM_TO_FOLDER: {
			return {
				...state,
				folders: [...action.payload]
			}
		}
		case REMOVE_ALBUM_FROM_FOLDER: {
			return {
				...state,
				folders: [...action.payload]
			}
		}
		
		case SET_FOLDERS: {
			return {
				...state,
				folders: [...action.payload]
			}
		}
		
		case REMOVE_FOLDERS: {
			return {
				...state,
				folders: []
			}
		}
		default:
			return state;
	}
};