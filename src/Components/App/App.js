import React, {Component} from "react";
import "./App.css";
import {mapAlbumData} from "../../functions";
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
		this.state = {
			albums: [],
			albumProgress: 0,
		};
		this.props.fetchFolders();
		this.getAlbums = this.getAlbums.bind(this);
		this.getAlbumsCallback = this.getAlbumsCallback.bind(this);
		this.setFolders = this.setFolders.bind(this);
	}
	
	setFolders(folders){
		this.setState({folders: folders});
		localStorage.setItem("folders", JSON.stringify(folders));
	}
	
	componentDidMount() {
		this.props.getToken();
		setTimeout( () => {
			if(this.props.token){
				this.props.fetchAlbums({token: this.props.token});
			}
		}, 1000);
	}
	
	getAlbums(url = "https://api.spotify.com/v1/me/albums?limit=50") {
		console.log('getin');
		const options = {
			method: "get",
			headers: {
				"Authorization": "Bearer " + this.props.token
			}
		};
		fetch(url, options).then( data => {
			return data.json();
		}).then( parsedData => {
			this.getAlbumsCallback(parsedData);
		})
	}
	
	getAlbumsCallback(data) {
		this.setState(prev => {
			const albumData = data.items.map(mapAlbumData);
			const albums = prev.albums.concat(albumData);
			const progress = Math.round(10000 * albums.length / data.total) / 100;
			return {
				albumProgress: progress,
				albums: albums
			}
		}, () => {
			if (data.next) this.getAlbums(data.next)
		});
	}
	
	render() {
		if (this.props.token && this.state.albumProgress === 100) {
			return (
				<div className="App container">
					<AlbumContainer albums={this.state.albums} folders={this.state.folders}/>
					<FolderContainer />
				</div>
			)
		} else if (this.props.token && this.state.albumProgress !== 100) {
			return (
				<div className="App">
					<AlbumFetchingPlaceholder fetched={this.state.albumProgress}/>
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
	token: state.app.token
});

export default connect(mapStateToProps, {fetchFolders, getToken, fetchAlbums})(App);
