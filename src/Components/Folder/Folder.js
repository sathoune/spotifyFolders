import React from "react";
import "./Folder.css";
import {connect} from "react-redux";
import {removeFolder} from "../../redux/actions/folderActions";

const Folder = (props) => {
	
	const handleClick = ({target}) => {
		const targetId = (target.parentElement.id.replace("folder-", ""));
		props.removeFolder(targetId);
	};
 
	return (
		<div id={`folder-${props.id}`} className="folder">
			<div className={"folder-name"}>
				<strong>{props.name}</strong>
			</div>
			<button onClick={handleClick}>Remove me!</button>
		</div>
	)
};

export default connect(null, {removeFolder})(Folder);