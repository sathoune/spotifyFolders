import React, {useState} from "react";
import "./FolderCreator.css";
import {connect} from "react-redux";
import {addFolder} from "../../redux/actions/folderActions";


const setValueWithStateSetter = value => stateSetter => stateSetter(value);

const FolderCreator = (props) => {
	const [input, setInput] = useState("");
	
	const createFolder = () => {
		props.addFolder(input);
		setInput("");
	};
	
	return (
		<header id={"folder-creator"}>
			<input
				id={"new-folder-name"}
				onChange={(e) => {setValueWithStateSetter(e.target.value)(setInput)}}
				type={"text"}
				placeholder={"folder name"}
				value={input}
			/>
			<button
				className="header-btn"
				onClick={createFolder}>
				Create folder
			</button>
		</header>)
};

const mapStateToProps = (state) => ({
	folders: state.folders.folders
});
//
// const mapDispatchToProps = (dispatch) => {
// 	addFolder: dispatch(addFolder())
// };

export default connect(
	mapStateToProps,
	{addFolder}
)(FolderCreator);
