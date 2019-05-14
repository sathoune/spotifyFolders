import React from 'react';
import "./FolderContainer.css"
import Folder from "../Folder/Folder";
import FolderCreator from "../FolderCreator/FolderCreator";
import {connect} from "react-redux";
import {setFoldersToAPI} from "../../functions";

const FolderContainer = props => {
	
	setFoldersToAPI(props.folders);
	return ((props) => {
		return (
			<div id="folder-container" className="folder-container">
				<FolderCreator/>
				<div id={"folders"}>
					{props.folders.map((folder) => (
						<Folder
							key={"folder" + folder.id}
							data={folder}
						/>)
					)}
				</div>
			</div>)
	})(props);
};

const mapStateToProps = (state) => ({
	folders: state.folders.folders
});

export default connect(mapStateToProps)(FolderContainer)
