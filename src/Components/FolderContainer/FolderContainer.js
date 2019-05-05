import React, {Component} from 'react';
import "./FolderContainer.css"
import Folder from "../Folder/Folder";
import {getFoldersFromLocalStorage} from "../../functions";

class FolderContainer extends Component {
	constructor(props) {
		super(props);
		
		const folders = getFoldersFromLocalStorage();
		if(folders){
			this.state = {
				folders: getFoldersFromLocalStorage()
			}
		} else {
			this.state = {
				folders: []
			}
		}
		this.createFolder = this.createFolder.bind(this);
	}
	
	createFolder() {
		const nameInput = document.getElementById("new-folder-name");
		const folder = {
			id: 0,
			name: nameInput.value,
			albums: [],
		};
		nameInput.value = "";
		if (localStorage.hasOwnProperty("folders")) {
			
			const folders = getFoldersFromLocalStorage();
			const names = folders.map(each => each.name);
			if (names.indexOf(folder.name) === -1) {
				folder.id = folders.length;
				folders.push(folder);
				localStorage.setItem("folders", JSON.stringify(folders));
				this.setState({folders: folders});
			} else console.log("folder with given name already exists");
			
		} else {
			localStorage.setItem("folders", (JSON.stringify([folder])));
		}
		
		
	}
	
	render() {
		return (
			<div className="folder-container">
				<header>
					<input id={"new-folder-name"} type={"text"} placeholder={"folder name"}/>
					<button onClick={this.createFolder}>
						Create folder
					</button>
				</header>
				<div id={"folders"}>
					{(this.state.folders !== []) ? (
						this.state.folders.map(folder => {
							{
								return <Folder key={folder.id} name={folder.name}/>
							}
						})
					) : (
						<div>No fodlers yet!</div>
					)}
				</div>
			</div>)
	}
}

export default FolderContainer;