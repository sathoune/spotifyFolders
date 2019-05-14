import React from 'react';
import Header from "../Header/Header";
import AlbumContainer from "../AlbumContainer/AlbumContainer";
import FolderContainer from "../FolderContainer/FolderContainer";
import Footer from "../Footer/Footer";
import demoData from "../../demoData";
import "../App/App.css";


const Demo = props => {
	return (
		<div className="App container">
			<Header/>
			<AlbumContainer albums={demoData} folders={[]}/>
			<FolderContainer/>
			<Footer/>
		</div>
	);
};

export default Demo;