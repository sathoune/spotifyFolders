import {FETCH_ALBUMS, ERROR} from "./actionTypes";

export const fetchAlbums = ({url="https://api.spotify.com/v1/me/albums?limit=50", token}) => dispatch => {
	console.log(url);
	const options = {
		method: "get",
		headers: {
			"Authorization": "Bearer " + token
		},
	};
	fetch(url, options).then( data => {
		return data.json();
	}).then( parsedData => {
		console.log(parsedData);
		if(parsedData.next){
			console.log('there is next');
			dispatch(fetchAlbums({url: parsedData.next, token: token}));
		}
		dispatch({
			type: FETCH_ALBUMS,
			payload: parsedData.items
		})
		
	}).catch( error => {
		dispatch({
			type: ERROR
		})
	});

};
