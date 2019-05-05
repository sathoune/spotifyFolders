import React, {Component} from "react";
import hash from "./hash";
import "./App.css";
import Login from "./Login";
import ajax from "./ajax";
import AlbumContainer from "./AlbumContainer";
import AlbumFetchingPlaceholder from "./AlbumFetchingPlaceholder";

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			token: null,
			albums: [],
			albumProgress: 0,
		};
		
		this.getAlbums          = this.getAlbums.bind(this);
		this.getAlbumsCallback  = this.getAlbumsCallback.bind(this);
	}
	
	componentDidMount(){
		const _token = hash.access_token;
		if (_token) this.setState({token: _token }, this.getAlbums);
	}
	
	getAlbums(url="https://api.spotify.com/v1/me/albums?limit=50"){
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
	
	getAlbumsCallback(data){
		this.setState(prev => {
			const albums = prev.albums.concat(data.items);
			const progress = Math.round(10000*albums.length/data.total)/100;
			return {
				albumProgress: progress,
				albums: albums
			}
		},() => { if (data.next) this.getAlbums(data.next) });
	}
	
	render() {
		return (
			<div className="App">
				{(!this.state.token) ? (
					<Login/>
				) : (
					(this.state.albumProgress !== 100) ? (
						<AlbumFetchingPlaceholder fetched={this.state.albumProgress}/>
					) : (
						<AlbumContainer albums={this.state.albums}/>
					)
				)}
			</div>
		);
	}
}

export default App;
