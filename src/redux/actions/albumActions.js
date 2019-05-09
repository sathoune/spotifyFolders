import {FETCH_ALBUMS} from "./actionTypes";
import {ajax} from "../../functions";

export const fetchAlbums = (url="https://api.spotify.com/v1/me/albums?limit=50") => dispatch => {
	
	const options = {
		url: url,
		method: "get",
		headers: {
			"Authorization": "Bearer " + this.state.token
		},
		callback: this.getAlbumsCallback
	};
	ajax(options);
	
	dispatch({
		type: FETCH_ALBUMS
	})
	
};