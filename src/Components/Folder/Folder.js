import React from "react";
import "./Folder.css";
import {connect} from "react-redux";
import {removeFolder} from "../../redux/actions/folderActions";
import FolderedAlbum from "../Album/FolderedAlbum";
import {toggleClass} from "../../functions";

const Folder = (props) => {
	const handleRemoveFolderClick = ({target}) => {
		const targetId = (target.parentElement.id.replace("folder-", ""));
		props.removeFolder(targetId);
	};
	
	const handleExpandFolderClick = ({target}) => {
		const toggleableClass = "hidden";
		const albumContainer = target.parentElement.parentElement.nextElementSibling;
		toggleClass(albumContainer, toggleableClass);
	};
	
	return (
		<div id={`folder-${props.data.id}`} className="folder">
			<div>
				<div className={"folder-name"}>
					<strong onClick={handleExpandFolderClick}>{props.data.name}</strong>
				</div>
				<button onClick={handleRemoveFolderClick}>Remove me!</button>
			</div>
			<div className="foldered-album-container hidden">
				{props.data.albums.map((album, i) => (
					<FolderedAlbum
						key={`foldered-${i}-${album.id}`}
						folderName={props.data.id}
						album={album}
					/>)
				)}
			</div>
		</div>
	)
};

export default connect(null, {removeFolder})(Folder);