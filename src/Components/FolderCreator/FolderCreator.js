import React from "react";
import "./FolderCreator.css";

const FolderCreator = (props) => {
	return (
		<header id={"folder-creator"}>
			<input id={"new-folder-name"} type={"text"} placeholder={"folder name"}/>
			<button onClick={props.createFolder}>
				Create folder
			</button>
		</header>)
};

export default FolderCreator;