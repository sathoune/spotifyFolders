import React from "react";
import {connect} from 'react-redux';
import {addAlbumToFolder} from "../../redux/actions/folderActions";
import Album from "./Album";


const FolderlessAlbum = (props) => {
	const handleSaveAlbumToFolderClick = ({target}) => {
		const folder = (target.nextElementSibling.value);
		props.addAlbumToFolder(folder, props.album);
	};
	
	const addToFolderContainer = (
		<div className={"album-add-to-folder"}>
			<button onClick={handleSaveAlbumToFolderClick}>Add to</button>
			{props.children}
		</div>);
	
	return (<Album 
		{...props}
		idPrefix={"folderless"}
		enhancement={addToFolderContainer}
	/>);
	
};

export default connect(null, {addAlbumToFolder})(FolderlessAlbum);
