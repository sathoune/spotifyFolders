import React from "react";
import "./Folder.css";

const Folder = (props) => {
	return (
		<div id={props.folder.id} className="folder">
			<div className={"folder-name"}>
				<strong>{props.folder.name}</strong>
			</div>
		</div>)
};

export default Folder;