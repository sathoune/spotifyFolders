import React from 'react';
import "./FolderContainer.css"
import Folder from "../Folder/Folder";
import {setFoldersToLocalStorage} from "../../functions";
import FolderCreator from "../FolderCreator/FolderCreator";
import {connect} from "react-redux";
import {fetchFolders} from "../../redux/actions";

const FolderContainer = props => {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		folders: props.folders
	// 	};
	//
	// 	this.createFolder = this.createFolder.bind(this);
	// 	this.removeFolder = this.removeFolder.bind(this);
	// }
	//
	// createFolder() {
	// 	const nameInput = document.getElementById("new-folder-name");
	// 	const name = nameInput.value.trim();
	// 	nameInput.value = "";
	// 	if (name === "") {
	// 		console.log("No name provided");
	// 	} else {
	// 		const folder = {
	// 			id: name.replace(" ", "-"),
	// 			name: name,
	// 			albums: [],
	// 		};
	// 		if (localStorage.hasOwnProperty("folders")) {
	//
	// 			const folders = this.state.folders;
	// 			const names = folders.map(each => each.name);
	// 			if (names.indexOf(folder.name) === -1) {
	// 				folders.push(folder);
	// 				setFoldersToLocalStorage(folders);
	// 				this.setState({folders: folders});
	// 			} else console.log("folder with given name already exists");
	//
	// 		} else {
	// 			setFoldersToLocalStorage([folder])
	// 			this.setState({folders: [folder]});
	// 		}
	// 	}
	// }
	//
	// removeFolder(e) {
	// 	const id = (e.target.parentElement.id.replace("folder-", ""));
	// 	const folders = this.state.folders.filter(folder => folder.id !== id);
	// 	setFoldersToLocalStorage(folders);
	// 	this.setState({folders: folders});
	// }
	return (
		<div className="folder-container">
			<FolderCreator/>
			<div id={"folders"}>
				{props.folders.map((folder) => {
						return <div key={"folder" + folder.id}>{folder.name}</div>
					}
				)}
			</div>
		</div>)
};

const mapStateToProps = (state) => ({
	folders: state.folders.folders
});

export default connect(mapStateToProps)(FolderContainer)
