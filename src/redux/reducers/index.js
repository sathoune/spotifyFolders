import { combineReducers } from "redux";
import {folderReducer} from "./folders";
import {errorReducer} from "./errors";
import {albumReducer} from "./albums";
import {appReducer} from "./app";

export default combineReducers({
	app: appReducer,
	albums: albumReducer,
	folders: folderReducer,
	errors: errorReducer
});
