import React from "react";
import "./Album.css";
import {connect} from 'react-redux';

const Album = (props) => (
	<div id={props.album.id} className="album">
		<a href={props.album.url} target={"_blank"}>
			<img alt="" src={props.album.img}/>
		</a>
		<div className={"album-name"}>
			<strong>{props.album.name}</strong>
		</div>
		<div className={"album-artist"}>
			{props.album.artist}
		</div>
		<div className={"album-add-to-folder"}>
			<button>Add to</button>
			{props.children}
		</div>
	</div>
);

export default connect()(Album);
