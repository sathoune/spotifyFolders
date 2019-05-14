import React from 'react';
import './Header.css';
import {getFoldersFromAPI, toggleClass} from "../../functions";

const toggleVisibilityOfAlbums = ({target}) => {
	const albumContainer = document.getElementById("album-container");
	const folderContainer = document.getElementById("folder-container");
	const hiddenClass = "hidden";
	toggleClass(albumContainer, hiddenClass);
	if(target.innerHTML === "hide albums") {
		target.innerHTML = "show albums";
		folderContainer.style.width = "100%";
	}
	else {
		target.innerHTML = "hide albums";
		folderContainer.style.width= "";
	}
};

const toggleVisibilityOfFolders = ({target}) => {
	const folderContainer = document.getElementById("folder-container");
	const albumContainer = document.getElementById("album-container");
	const className = "hidden";
	toggleClass(folderContainer, className);
	if(target.innerHTML === "hide folders") {
		target.innerHTML = "show folders";
		albumContainer.style.width = "100%";
	}
	else {
		target.innerHTML = "hide folders";
		albumContainer.style.width = "";
	}
};

const downloadFolders = () => {
	const folders = getFoldersFromAPI();
	downloadObjectAsJson(folders, "myFolders");
};

const removeFolders = () => {

};

const uploadFolders = () => {

};

function downloadObjectAsJson(exportObj, exportName){
	const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj, null, 4));
	const downloadAnchorNode = document.createElement('a');
	downloadAnchorNode.setAttribute("href",     dataStr);
	downloadAnchorNode.setAttribute("download", exportName + ".json");
	document.body.appendChild(downloadAnchorNode); // required for firefox
	downloadAnchorNode.click();
	downloadAnchorNode.remove();
}

const Header = () => {
	return (
		<header>
			<button className="header-btn" onClick={toggleVisibilityOfAlbums}>hide albums</button>
			<button className="header-btn" onClick={toggleVisibilityOfFolders}>hide folders</button>
			This is header
			<button className="remove-btn" onClick={removeFolders}>remove my folders</button>
			<button className="download-btn" onClick={uploadFolders}>upload my folders</button>
			<button className="download-btn" onClick={downloadFolders}>download my folders</button>
		</header>
	)
};

export default Header;