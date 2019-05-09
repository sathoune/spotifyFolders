import React, {useState, useReducer} from "react";
import "./FolderCreator.css";
import {connect} from "react-redux";
import {addFolder} from "../../redux/actions";
import * as foldersReducer from "../../redux/reducers/folders";

const FolderCreator = (props) => {
	
//	const [state, dispatch] = useReducer(foldersReducer.folderReducer, foldersReducer.initialState);
	const [input, setInput] = useState("");
	
	const handleInputChange = ({target}) => setInput(target.value);
	const createFolder = () => {
		props.addFolder(input);
		console.log('creating folder');
		setInput("");
	};
	
	return (
		<header id={"folder-creator"}>
			{input}
			<input id={"new-folder-name"} onChange={handleInputChange} type={"text"} placeholder={"folder name"}/>
			<button onClick={createFolder}>Create folder</button>
		</header>)
};

export default connect(
	null,
	{addFolder}
)(FolderCreator);
