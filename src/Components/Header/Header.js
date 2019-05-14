import React from 'react';
import './Header.css';
import {getFoldersFromAPI, toggleClass} from "../../functions";

const toggleVisibilityOfAlbums = ({target}) => {
	const albumContainer = document.getElementById("album-container");
	const className = "hidden";
	toggleClass(albumContainer, className);
	if(target.innerHTML === "hide albums") target.innerHTML = "show albums";
	else target.innerHTML = "hide albums";
};

const toggleVisibilityOfFolders = ({target}) => {
	const albumContainer = document.getElementById("folder-container");
	const className = "hidden";
	toggleClass(albumContainer, className);
	if(target.innerHTML === "hide folders") target.innerHTML = "show folders";
	else target.innerHTML = "hide folders";
};

const downLoadFolders = () => {
	const folders = getFoldersFromAPI();
	downloadObjectAsJson(folders, "myFolders");
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
			<button className="download-btn" onClick={downLoadFolders}>download folders</button>
		</header>
	)
};

export default Header;