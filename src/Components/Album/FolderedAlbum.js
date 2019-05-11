import React from "react";
import {connect} from 'react-redux';
import Album from "./Album";

const FolderedAlbum = (props) => {
	return (<Album
		{...props}
		idPrefix={"foldered"}
	/>);
	
};

export default connect()(FolderedAlbum);
