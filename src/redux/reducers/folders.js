import {ADD_FOLDER} from "../actionTypes";

export const initialState = {
	folders: []
};

export const folderReducer = (state=initialState, action) => {
	console.log('reducing state');
	switch(action.type) {
		case ADD_FOLDER: {
			console.log('reducing add_folder action');
			console.log(action);
			console.log(state);
			return {...state,
				folders: [action.payload.folder, ...state.folders]
			};
		}
		default: {
			return state;
		}
	}
};