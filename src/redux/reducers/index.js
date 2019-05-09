import { combineReducers } from "redux";
import {folderReducer} from "./folders";
import {errorReducer} from "./errors";

export default combineReducers({folders: folderReducer, errors: errorReducer});
