import React from 'react';
import FolderlessAlbum from "../Album/FolderlessAlbum";
import "./AlbumContainer.css";
import {connect} from 'react-redux';
import SelectFolder from "../SelectFolder/SelectFolder";

const AlbumContainer = props => {
	const folderSelector = <SelectFolder/>;
	return (
		<div id="album-container" className="album-container">{
			props.albums.map(album => (
				<FolderlessAlbum
					key={"folderless-" + album.id}
					album={album}
					children={folderSelector}
				/>
			))}
		</div>
	);
};

const mapStateToProps = state => ({
	folders: state.folders.folders
});

export default connect(mapStateToProps)(AlbumContainer);