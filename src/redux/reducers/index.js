import { combineReducers } from "redux";
import {folderReducer} from "./folders";

export default combineReducers({folders: folderReducer});
