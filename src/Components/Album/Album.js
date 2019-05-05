import React from "react";
import "./Album.css";

const Album = (props) => {
	return <div id={props.album.id} className="album">
		<a href={props.album.external_urls.spotify} target={"_blank"}>
			<img alt="" src={props.album.images[1].url} />
		</a>
		<div className={"album-name"}>
			<strong>{props.album.name}</strong>
		</div>
		<div className={"album-artist"}>
			{props.album.artists[0].name}
		</div>
	</div>
};

export default Album;