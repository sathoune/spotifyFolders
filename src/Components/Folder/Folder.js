import React from "react";
import "./Folder.css";

const Folder = (props) => {
	return (
		<div id={`folder-${props.id}`} className="folder">
			<div className={"folder-name"}>
				<strong>{props.name}</strong>
			</div>
			<button onClick={props.removeFolder}>Remove me!</button>
		</div>
	)
};

export default Folder;