import React from "react";
import "./Album.css";
import {getFoldersFromLocalStorage} from "../../functions";

const Album = (props) => {
	const folders = getFoldersFromLocalStorage();
	
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
		<div className={"album-add-to-folder"}>
			<button>Add to</button>
			<select>
				<option key={"empty"}></option>
				{folders.map(folder => <option key={`option-${folder.name}`}>{folder.name}</option>)}
			</select>
		</div>
	</div>
};

export default Album;