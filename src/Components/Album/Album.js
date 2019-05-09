import React from "react";
import "./Album.css";

const Album = (props) => {
	
	return <div id={props.album.id} className="album">
		<a href={props.album.url} target={"_blank"}>
			<img alt="" src={props.album.img} />
		</a>
		<div className={"album-name"}>
			<strong>{props.album.name}</strong>
		</div>
		<div className={"album-artist"}>
			{props.album.artist}
		</div>
		<div className={"album-add-to-folder"}>
			<button>Add to</button>
			{/*<select>*/}
			{/*	<option key={"empty"}></option>*/}
			{/*	{props.folders.map(folder => <option key={`option-${folder.name}`}>{folder.name}</option>)}*/}
			{/*</select>*/}
		</div>
	</div>
};

export default Album;