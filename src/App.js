import React, {Component} from "react";
import hash from "./hash";
import "./App.css";
import Login from "./Login";
import ajax from "./ajax";
import AlbumContainer from "./AlbumContainer";
import AlbumFetchingPlaceholder from "./AlbumFetchingPlaceholder";

class App extends Component {
	constructor() {
		super();
		this.state = {
			token: null,
			albums: [],
			totalAlbums: 0,
		};
		this.getAlbums = this.getAlbums.bind(this);
	}
	
	componentDidMount() {
		const _token = hash.access_token;
		
		if (_token) {
			this.setState({
					token: _token
				}, () => this.getAlbums("https://api.spotify.com/v1/me/albums")
			);
		}
	}
	
	getAlbums(url) {
		const options = {
			url: url,
			method: "get",
			headers: {
				"Authorization": "Bearer " + this.state.token
			},
			callback: (data) => {
				this.setState(
					prev => {
						return {
							totalAlbums: data.total,
							albums: prev.albums.concat(data.items)
						}
					}
				);
				if (data.next) this.getAlbums(data.next);
				else this.setState({albumsLoaded: true});
			}
		};
		ajax(options);
	}
	
	render() {
		
		return (
			<div className="App">
				{(!this.state.token)
					?
					(<Login/>)
					:
					(
						(this.state.totalAlbums - this.state.albums.length > 0)
							?
							<AlbumFetchingPlaceholder fetched={this.state.albums.length/this.state.totalAlbums}/>
							:
							<AlbumContainer albums={this.state.albums}/>
						
					)
				}
			</div>
		);
	}
}

export default App;
