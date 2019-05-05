import React from "react";
import "./Folder.css";

const Folder = (props) => {
	return (
		<div className="folder">
			<div className={"folder-name"}>
				<strong>{props.name}</strong>
			</div>
		</div>)
};

export default Folder;