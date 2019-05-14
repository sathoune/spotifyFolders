import {GET_TOKEN, SET_DEMO} from "./actionTypes";
import hash from "../../hash";


export const getToken = () => dispatch => {
	const _token = hash.access_token;
	dispatch({
		type: GET_TOKEN,
		payload: {
			token: _token
		}
	})
};

export const setDemo = () => dispatch => {
	dispatch({
		type: SET_DEMO
	})
};