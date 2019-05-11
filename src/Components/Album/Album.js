import React from "react";
import "./Album.css";

const Album = (props) => {
	return (
		<div id={((props.prefix) ? props.prefix : "") + props.album.id}
		     className="album">
			<div>
				<a href={props.album.url} target={"_blank"}>
					<img alt="" src={props.album.img}/>
				</a>
				<div className={"album-name"}>
					<strong>{props.album.name}</strong>
				</div>
				<div className={"album-artist"}>
					{props.album.artist}
				</div>
			</div>
			{props.enhancement}
		</div>
	)
};

export default Album;
