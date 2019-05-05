import React, {Component} from "react";
import * as $ from "jquery";
import hash from "./hash";
import Player from "./Player";
import "./App.css";
import { Login } from "./Login";
import { ajax } from "./ajax";

class App extends Component {
	constructor() {
		super();
		this.state = {
			token: null,
			item: {
				album: {
					images: [{url: ""}]
				},
				name: "",
				artists: [{name: ""}],
				duration_ms: 0,
			},
			is_playing: "Paused",
			progress_ms: 0
		};
		this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
	}
	
	componentDidMount() {
		// Set token
		let _token = hash.access_token;
		
		if (_token) {
			// Set token
			this.setState({
				token: _token
			});
			this.getCurrentlyPlaying(_token);
			this.getAlbums(_token, "https://api.spotify.com/v1/me/albums");
		}
	}
	
	
	getAlbums(token, url){
		const options = {
			url: url,
			method: "get",
			headers: {
				"Authorization": "Bearer " + token
			},
			callback: (data) => {
				console.log(data.items);
				if (data.next) {
					this.getAlbums(token, data.next);
				}
			}
		};
		ajax(options);
	}
	
	getCurrentlyPlaying(token) {
		// Make a call using the token
		$.ajax({
			url: "https://api.spotify.com/v1/me/player",
			type: "GET",
			beforeSend: (xhr) => {
				xhr.setRequestHeader("Authorization", "Bearer " + token);
			},
			success: (data) => {
			//	console.log("data", data);
				this.setState({
					item: data.item,
					is_playing: data.is_playing,
					progress_ms: data.progress_ms,
				});
			}
		});
	}
	
	render() {
		
		return (
			<div className="App">
				<header className="App-header">
					{(!this.state.token)
							?
							( <Login /> )
							:
							(<Player
								item={this.state.item}
								is_playing={this.state.is_playing}
								progress_ms={this.progress_ms}
							/>)
					}
				</header>
			</div>
		);
	}
}

export default App;
