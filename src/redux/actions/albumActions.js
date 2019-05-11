import {FETCH_ALBUMS, ERROR} from "./actionTypes";
import {mapAlbumData} from "../../functions";

export const fetchAlbums = ({url = "https://api.spotify.com/v1/me/albums?limit=50", token}) => dispatch => {
	const options = {
		method: "get",
		headers: {
			"Authorization": "Bearer " + token
		},
	};
	fetch(url, options).then(data => data.json())
		.then(parsedData => {
			const mappedAlbums = parsedData.items.map(mapAlbumData);
			if (parsedData.next) {
				dispatch(fetchAlbums({url: parsedData.next, token: token}));
			}
			const progressRatio = (parsedData.offset + parsedData.limit) / (parsedData.total);
			const progressPercents = (progressRatio < 1) ? (Math.round(10000 * progressRatio) / 100) : (100);
			dispatch({
				type: FETCH_ALBUMS,
				payload: mappedAlbums,
				albumProgress: progressPercents
			});
		}).catch(error => {
		dispatch({
			type: ERROR
		});
	});
};
