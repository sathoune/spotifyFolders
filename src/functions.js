export const getFoldersFromAPI = () => {
	return (localStorage.hasOwnProperty("folders")) ? (
		JSON.parse(localStorage.getItem("folders"))
	) : (
		(function () {
			localStorage.setItem("folders", JSON.stringify([]));
			return [];
		})()
	)
};

export const setFoldersToAPI = (foldersArray) => {
	localStorage.setItem("folders", JSON.stringify(foldersArray));
	return foldersArray;
};

export const addFolderToAPI = (folderCandidate) => {
	if (folderCandidate === "") {
		return {err: "No name provided", code: 400}
	} else {
		const folders = getFoldersFromAPI();
		const names = folders.map(each => each.name);
		if (names.indexOf(folderCandidate) === -1) {
			const newFolder = {
				id: folderCandidate,
				name: folderCandidate,
				albums: []
			};
			folders.unshift(newFolder);
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

export const removeFolderFromAPI = folderId => {
	const folders = getFoldersFromAPI();
	const filteredFolders = folders.filter(folder => folder.id !== folderId)
	return setFoldersToAPI(filteredFolders);
};

export const addAlbumToFolderInAPI = (folder, album) => {
	const folders = getFoldersFromAPI();
	
	const names = folders.map(each => each.name);
	const folderIndexInAPI = names.indexOf(folder);
	const albums = folders[folderIndexInAPI].albums;
	const inAlbums = albums.filter(each => each.id === album.id);
	
	if(inAlbums.length === 0) {
		folders[folderIndexInAPI].albums.push(album);
		return {
			code: 201,
			folders
		};
	} else {
		return {
			code: 400,
			msg: "Album already in folder"
		}
	}
};

export const removeAlbumFromFolderInAPI = (albumId, folderName) => {
	const folders = getFoldersFromAPI();
	
	const names = folders.map(each => each.name);
	const folderIndex = names.indexOf(folderName);
	const albumIds = folders[folderIndex].albums.map(each => each.id);
	const albumIndex = albumIds.indexOf(albumId);
	
	if(albumIndex !== -1){
		folders[folderIndex].albums.splice(albumIndex, 1);
		return {
			code: 200,
			folders
		};
	} else {
		return {
			code: 400,
			msg: "Album not in the folder"
		};
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

export const toggleClass = (target, className) => {
	const classList = target.className.split(" ");
	const classIndex = classList.indexOf(className);
	
	if(classIndex === -1) {
		classList.push(className);
		target.className = classList.join(" ");
	}
	else {
		target.className  = classList.splice(className, 1).join(" ");
	}
	
};