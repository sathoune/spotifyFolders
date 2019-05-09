import {ADD_FOLDER, FETCH_FOLDERS, REMOVE_FOLDER} from "../actions/actionTypes";

export const initialState = {
	folders: []
};

export const folderReducer = (state=initialState, action) => {
	console.log('reducing state');
	switch(action.type) {
		case ADD_FOLDER: {
			return {...state,
				folders: [action.payload.folder, ...state.folders]
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
		
		default: {
			return state;
		}
	}
};