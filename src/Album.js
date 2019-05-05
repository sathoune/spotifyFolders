import React from "react";
import "./Album.css";

const Album = (props) => {
	return <div className="album">
		<div>
			Album: {props.album.name}
		</div>
		<div>
			Artist: {props.album.artists[0].name}
		</div>
	</div>
};

export default Album;