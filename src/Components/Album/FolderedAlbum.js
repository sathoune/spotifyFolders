import React from "react";
import {connect} from 'react-redux';
import Album from "./Album";
import {removeAlbumFromFolder} from "../../redux/actions/folderActions";

const FolderedAlbum = (props) => {
	
	const handleRemoveAlbumFromFolderClick = ({target}) => {
		const folderName = props.folderName;
		const albumId = props.album.id;
		props.removeAlbumFromFolder(albumId, folderName);
	};
	
	const removeFromFolderContainer = (
		<button onClick={handleRemoveAlbumFromFolderClick}>
			Remove from folder
		</button>
		
	)
	return (<Album
		{...props}
		idPrefix={"foldered"}
		enhancement={removeFromFolderContainer}
	/>);
	
};

export default connect(null, {removeAlbumFromFolder})(FolderedAlbum);
