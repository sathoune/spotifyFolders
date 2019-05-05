import React, {Component} from "react";
import "./App.css";
import hash from "../../hash";
import ajax from "../../ajax";
import Login from "../Login/Login";
import AlbumContainer from "../AlbumContainer/AlbumContainer";
import AlbumFetchingPlaceholder from "../AlbumContainer/AlbumContainerPlaceholder";
import FolderContainer from "../FolderContainer/FolderContainer";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			token: null,
			albums: [],
			albumProgress: 0,
		};
		
		this.getAlbums = this.getAlbums.bind(this);
		this.getAlbumsCallback = this.getAlbumsCallback.bind(this);
	}
	
	componentDidMount() {
		const _token = hash.access_token;
		if (_token) this.setState({token: _token}, this.getAlbums);
	}
	
	getAlbums(url = "https://api.spotify.com/v1/me/albums?limit=50") {
		const options = {
			url: url,
			method: "get",
			headers: {
				"Authorization": "Bearer " + this.state.token
			},
			callback: this.getAlbumsCallback
		};
		ajax(options);
	}
	
	getAlbumsCallback(data) {
		this.setState(prev => {
			const albums = prev.albums.concat(data.items);
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
		if (this.state.token && this.state.albumProgress === 100) {
			return (
				<div className="App container">
					<AlbumContainer albums={this.state.albums}/>
					<FolderContainer/>
				</div>
			)
		} else if (this.state.token && this.state.albumProgress !== 100) {
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

export default App;
