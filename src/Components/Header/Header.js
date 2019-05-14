import React from 'react';
import './Header.css';
import {getFoldersFromAPI, toggleClass} from "../../functions";
import {connect} from "react-redux";
import {removeFolders, setFolders} from "../../redux/actions/folderActions";

const toggleVisibilityOfAlbums = ({target}) => {
	const albumContainer = document.getElementById("album-container");
	const folderContainer = document.getElementById("folder-container");
	const hiddenClass = "hidden";
	toggleClass(albumContainer, hiddenClass);
	if (target.innerHTML === "hide albums") {
		target.innerHTML = "show albums";
		folderContainer.style.width = "100%";
	} else {
		target.innerHTML = "hide albums";
		folderContainer.style.width = "";
	}
};

const toggleVisibilityOfFolders = ({target}) => {
	const folderContainer = document.getElementById("folder-container");
	const albumContainer = document.getElementById("album-container");
	const className = "hidden";
	toggleClass(folderContainer, className);
	if (target.innerHTML === "hide folders") {
		target.innerHTML = "show folders";
		albumContainer.style.width = "100%";
	} else {
		target.innerHTML = "hide folders";
		albumContainer.style.width = "";
	}
};

const downloadFolders = () => {
	const folders = getFoldersFromAPI();
	downloadObjectAsJson(folders, "myFolders");
};

function downloadObjectAsJson(exportObj, exportName) {
	const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj, null, 4));
	const downloadAnchorNode = document.createElement('a');
	downloadAnchorNode.setAttribute("href", dataStr);
	downloadAnchorNode.setAttribute("download", exportName + ".json");
	document.body.appendChild(downloadAnchorNode); // required for firefox
	downloadAnchorNode.click();
	downloadAnchorNode.remove();
}

const Header = (props) => {
	
	const handleRemoveFoldersClick = () => {
		props.removeFolders();
	};
	
	const handleUploadFoldersClick = () => {
		const uploadElement = document.getElementById("upload-folders");
		uploadElement.click();
	};
	
	const uploadFile = ({target}) => {
		const input = target.files[0];
		if (input.name.split('.')[1] === "json") {
			console.log(input);
			console.log('well don');
			
			const reader = new FileReader();
			reader.onload = function () {
				const dataURL = reader.result;
				props.setFolders(JSON.parse(dataURL));
			};
			reader.readAsText(input);
			
		} else {
			console.log('bad format, I need JSON file');
		}
	};

	return (
		<header>
			<button className="header-btn" onClick={toggleVisibilityOfAlbums}>hide albums</button>
			<button className="header-btn" onClick={toggleVisibilityOfFolders}>hide folders</button>
			<button className="remove-btn" onClick={handleRemoveFoldersClick}>remove my folders</button>
			<button className="download-btn" onClick={handleUploadFoldersClick}>upload my folders</button>
			<input
				id="upload-folders"
				style={{display: "none"}}
				type="file"
				onChange={uploadFile}
			/>
			<button className="download-btn" onClick={downloadFolders}>download my folders</button>
		</header>
	)
};

export default connect(null, {setFolders, removeFolders})(Header);