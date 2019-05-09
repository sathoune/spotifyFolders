export const getFoldersFromLocalStorage = () => {
	return (localStorage.hasOwnProperty("folders")) ? (
		JSON.parse(localStorage.getItem("folders"))
	) : (
		(function () {
			localStorage.setItem("folders", JSON.stringify([]));
			return [];
		})()
	)
};

export const setFoldersToLocalStorage = (foldersArray) => {
	localStorage.setItem("folders", JSON.stringify(foldersArray));
};

export const addFolderToLocalStorage = (folderCandidate) => {
	if (folderCandidate === "") {
		return {err: "No name provided", code: 400}
	} else {
		const folders = getFoldersFromLocalStorage();
		const names = folders.map(each => each.name);
		if (names.indexOf(folderCandidate) === -1) {
			const newFolder = {
				id: folderCandidate,
				name: folderCandidate,
				albums: []
			};
			folders.unshift(newFolder);
			setFoldersToLocalStorage(folders);
			return {
				code: 201,
				body: newFolder
			}
		} else {
			return {
				code: 400,
				err: "Folder with given name already exists"
			}
		}
	}
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