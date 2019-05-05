import React from 'react';
import Album from "./Album";

const AlbumContainer = (props) => {
	const createAlbum = (params) => <Album key={params.album.id} album={params.album}/>;
	
	return (<div className="album-container">
		{props.albums.map(createAlbum)}
	</div>)
};

export default AlbumContainer;