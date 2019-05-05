import React, {Component} from "react";
import hash from "./hash";
import "./App.css";
import Login from "./Login";
import {ajax} from "./ajax";
import Album from "./Album";

class App extends Component {
	constructor() {
		super();
		this.state = {
			token: null,
			albums: [],
			albumsLoaded: false,
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
						return {albums: prev.albums.concat(data.items)}
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
					(<div>Hello General Kenobi, I fetched
						{(!this.state.albumsLoaded)
							?
							this.state.albums.length + " of your albums"
							:
							(this.state.albums.map(
								album => {
									console.log(album);
									return <Album key={album.album.id} album={album.album}/>
								})
							)
						}
					</div>)
				}
			</div>
		);
	}
}

export default App;
