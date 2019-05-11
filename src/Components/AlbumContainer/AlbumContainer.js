import React, {Component} from 'react';
import Album from "../Album/Album";
import "./AlbumContainer.css";
import {connect} from 'react-redux';


class AlbumContainer extends Component {
	constructor(props) {
		super(props);
		this.folders =this.makeFolderSelector(this.props.folders);
	}
	
	makeFolderSelector(folders) {
		return (<select>
			{folders.map((folder, i) => <option key={i}>{folder.name}</option>)}
		</select>)
	}
	
	render() {
		return (
			<div className="album-container">
				{this.props.albums.map(album => {
					return <Album key={album.id} album={album} folders={this.folders}/>;
				})}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	folders: state.folders.folders
});

export default connect(mapStateToProps)(AlbumContainer);