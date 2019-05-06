import React, {Component} from 'react';
import Album from "../Album/Album";
import "./AlbumContainer.css"

class AlbumContainer extends Component {
	// constructor(props) {
	// 	super(props);
	// }
	
	createAlbum(params) {
		return <Album key={params.album.id} album={params.album}/>;
	}
	
	render() {
		return (
			<div className="album-container">
				{this.props.albums.map(this.createAlbum)}
			</div>)
	}
};

export default AlbumContainer;