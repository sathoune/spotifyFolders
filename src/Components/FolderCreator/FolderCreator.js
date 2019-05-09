import React, {useState} from "react";
import "./FolderCreator.css";
import {connect} from "react-redux";
import {addFolder} from "../../redux/actions";

const FolderCreator = (props) => {
	const [input, setInput] = useState("");
	
	const handleInputChange = ({target}) => setInput(target.value);
	const createFolder = () => {
		props.addFolder(input);
		setInput("");
	};
	
	return (
		<header id={"folder-creator"}>
			<input
				id={"new-folder-name"}
				onChange={handleInputChange}
				type={"text"}
				placeholder={"folder name"}
				value={input}
			/>
			<button
				onClick={createFolder}>
				Create folder
			</button>
		</header>)
};

export default connect(
	null,
	{addFolder}
)(FolderCreator);
