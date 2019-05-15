import React, {useEffect} from "react";
import "./App.css";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Welcome from "../Welcome/Welcome";
import AlbumContainer from "../AlbumContainer/AlbumContainer";
import AlbumFetchingPlaceholder from "../AlbumContainer/AlbumContainerPlaceholder";
import FolderContainer from "../FolderContainer/FolderContainer";
import {fetchFolders} from "../../redux/actions/folderActions";
import {connect} from "react-redux";
import {getToken, setDemo} from "../../redux/actions/appActions";
import {fetchAlbums} from "../../redux/actions/albumActions";
import Footer from "../Footer/Footer";
import demoData from "../../demoData";

const App = props => {
	useEffect(() => {
		props.fetchFolders();
		props.getToken();
	}, []);
	
	useEffect(() => {
		if (props.token) {
			props.fetchAlbums({token: props.token});
		}
	}, [props.token]);
	
	if (props.token && props.albumProgress === 100) {
		return (
			<div className="App container">
				<Header />
				<AlbumContainer albums={props.albums} folders={props.folders}/>
				<FolderContainer/>
				<Footer/>
			</div>
		)
	} else if (props.token && props.albumProgress !== 100) {
		return (
			<div className="App">
				<AlbumFetchingPlaceholder fetched={props.albumProgress}/>
			</div>
		)
	} else if(props.demo) {
		return (
			<div className="App container">
			<Header/>
			<AlbumContainer albums={demoData} folders={[]}/>
			<FolderContainer/>
			<Footer/>
		</div>);
	} else {
		return (
			<div className="App">
				<div className="container-column">
					<Welcome />
					<Login/>
					<button onClick={props.setDemo} className={"btn"}>Take me to demo!</button>
					<Footer/>
				</div>
			</div>
		)
	}
};

const mapStateToProps = (state) => ({
	token: state.app.token,
	albums: state.albums.albums,
	albumProgress: state.albums.albumProgress,
	demo: state.app.demo
});

export default connect(
	mapStateToProps,
	{fetchFolders, getToken, fetchAlbums, setDemo}
)(App);
