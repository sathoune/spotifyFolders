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

export const addAlbumToFolderToLocalStorage = (folder, album) => {
	const folders = getFoldersFromLocalStorage();
	const names = folders.map(each => each.name);
	const folderIndexInLocalStorage = names.indexOf(folder);
	folders[folderIndexInLocalStorage].albums.push(album);
	setFoldersToLocalStorage(folders);
	return folders;
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
	
	if(classIndex === -1) classList.push(className);
	else classList.splice(className);
	
	target.className = classList.join(" ");
};