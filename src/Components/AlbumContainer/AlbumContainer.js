import React, {Component} from 'react';
import Album from "../Album/Album";
import "./AlbumContainer.css";


class AlbumContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			folders: props.folders
		};
	}
	
	render() {
		return (
			<div className="album-container">
				{this.props.albums.map(album => {
					return <Album key={album.id} album={album} folders={this.state.folders}/>;
				})}
			</div>
		)
	}
}

export default AlbumContainer;