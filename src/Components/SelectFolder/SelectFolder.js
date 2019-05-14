import React from 'react';
import {connect} from "react-redux";

const SelectFolder = (props) => {
	return (
		<select className="folder-selection">
			{props.folders.map((folder, i) => <option key={i}>{folder.name}</option>)}
		</select>
	)
};

const mapStateToProps = state => ({
	folders: state.folders.folders
});

export default connect(mapStateToProps)(SelectFolder);