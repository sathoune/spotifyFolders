export const ajax = ({url, method, headers, callback}) => {
	const xhr = new XMLHttpRequest();
	xhr.onload = function () { callback(JSON.parse(xhr.response)) };
	xhr.open(method, url);
	for(let key in headers){
		if(headers.hasOwnProperty(key)) xhr.setRequestHeader(key, headers[key])
	}
	xhr.send();
};

export const getFoldersFromLocalStorage = () => {
	return (localStorage.hasOwnProperty("folders")) ? (
		JSON.parse(localStorage.getItem("folders"))
	) : (
		(function(){
			localStorage.setItem("folders", JSON.stringify([]));
			return [];
		})()
	)
};

export const setFoldersToLocalStorage = (foldersArray) => {
	localStorage.setItem("folders", JSON.stringify(foldersArray));
};

export const mapAlbumData = (album) => {
	return {
		name: album.album.name,
		id: album.album.id,
		artist: album.album.artists[0].name,
		url: album.album.external_urls.spotify,
		img: album.album.images[1].url
	}
};