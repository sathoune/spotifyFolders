import React, {Component} from "react";
import "./App.css";
import Login from "../Login/Login";
import AlbumContainer from "../AlbumContainer/AlbumContainer";
import AlbumFetchingPlaceholder from "../AlbumContainer/AlbumContainerPlaceholder";
import FolderContainer from "../FolderContainer/FolderContainer";
import {fetchFolders} from "../../redux/actions/folderActions";
import {connect} from "react-redux";
import {getToken} from "../../redux/actions/appActions";
import {fetchAlbums} from "../../redux/actions/albumActions";

class App extends Component {
	constructor(props) {
		super(props);
		this.props.fetchFolders();
	}
	
	componentDidMount() {
		this.props.getToken();
		setTimeout(() => {
			if (this.props.token) {
				this.props.fetchAlbums({token: this.props.token});
			}
		}, 1000);
	}

	render() {
		if (this.props.token && this.props.albumProgress === 100) {
			return (
				<div className="App container">
					<AlbumContainer albums={this.props.albums} folders={this.props.folders}/>
					<FolderContainer/>
				</div>
			)
		} else if (this.props.token && this.props.albumProgress !== 100) {
			return (
				<div className="App">
					<AlbumFetchingPlaceholder fetched={this.props.albumProgress}/>
				</div>
			)
		} else {
			return (
				<div className="App">
					<Login/>
				</div>
			)
		}
	}
}

const mapStateToProps = (state) => ({
	token: state.app.token,
	albums: state.albums.albums,
	albumProgress: state.albums.albumProgress
});

export default connect(mapStateToProps, {fetchFolders, getToken, fetchAlbums})(App);
